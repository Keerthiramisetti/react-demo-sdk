import React, { useState } from 'react';
import { FaFilter, FaChevronDown, FaChevronUp, FaCircle, FaCheckCircle, FaSortUp, FaSortDown, FaDownload } from 'react-icons/fa';
import ReactLoading from 'react-loading';
import { CSVLink } from 'react-csv';
import './List.css';

const List = ({ items, isOrdered = false, showIcons = false }) => {
  const [filters, setFilters] = useState(
    Object.keys(items[0] || {}).reduce((acc, key) => ({ ...acc, [key]: '' }), {})
  );
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [expandedItems, setExpandedItems] = useState([]);

  const allKeys = [...new Set(items.flatMap((item) => Object.keys(item)))];

  const handleSort = (key) => {
    const newDirection =
      sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction: newDirection });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
  };

  const handleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((_, index) => index));
    }
  };

  const handleItemSelect = (itemIndex) => {
    setSelectedItems((prev) => {
      if (prev.includes(itemIndex)) {
        return prev.filter((index) => index !== itemIndex);
      } else {
        return [...prev, itemIndex];
      }
    });
  };

  const handleToggleExpandItem = (itemIndex) => {
    setExpandedItems((prev) =>
      prev.includes(itemIndex)
        ? prev.filter((index) => index !== itemIndex)
        : [...prev, itemIndex]
    );
  };

  const filteredItems = items.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const sortedItems = filteredItems.sort((a, b) => {
    if (!sortConfig.key) return 0;
    const valueA = a[sortConfig.key];
    const valueB = b[sortConfig.key];

    if (valueA < valueB) return sortConfig.direction === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const totalItems = sortedItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const displayedItems = sortedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleJumpToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  // CSV Export
  const handleCSVExport = () => {
    return selectedItems.length > 0
      ? selectedItems.map((index) => items[index])
      : items;
  };

  return (
    <div className={`list-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="controls">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <input
          type="number"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          min="1"
          placeholder="Items per page"
        />
        <CSVLink data={handleCSVExport()}>Export to CSV</CSVLink>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
  
      {isLoading ? (
        <ReactLoading type="spin" color="#000" />
      ) : (
        <>
          {isOrdered ? (
            <ol className="custom-list ordered-list">
              {displayedItems.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className={`list-item ${selectedItems.includes(itemIndex) ? 'selected' : ''}`}
                  onClick={() => handleItemSelect(itemIndex)}
                >
                  <div className="list-item-content">
                    {showIcons && (
                      <span className="item-icon">
                        {selectedItems.includes(itemIndex) ? <FaCheckCircle /> : <FaCircle />}
                      </span>
                    )}
                    <div>
                      {allKeys.map((key) => (
                        <span key={key}>
                          <strong>{key}: </strong>
                          {item[key] !== undefined ? item[key] : 'N/A'}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleExpandItem(itemIndex);
                      }}
                      className="expand-button"
                    >
                      {expandedItems.includes(itemIndex) ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>
                  {expandedItems.includes(itemIndex) && (
                    <div className="expanded-content">
                      <p>More details about the item</p>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          ) : (
            <ul className="custom-list unordered-list">
              {displayedItems.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className={`list-item ${selectedItems.includes(itemIndex) ? 'selected' : ''}`}
                  onClick={() => handleItemSelect(itemIndex)}
                >
                  <div className="list-item-content">
                    {showIcons && (
                      <span className="item-icon">
                        {selectedItems.includes(itemIndex) ? <FaCheckCircle /> : <FaCircle />}
                      </span>
                    )}
                    <div>
                      {allKeys.map((key) => (
                        <span key={key}>
                          <strong>{key}: </strong>
                          {item[key] !== undefined ? item[key] : 'N/A'}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleExpandItem(itemIndex);
                      }}
                      className="expand-button"
                    >
                      {expandedItems.includes(itemIndex) ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>
                  {expandedItems.includes(itemIndex) && (
                    <div className="expanded-content">
                      <p>More details about the item</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
  
          <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
              Next
            </button>
            <input
              type="number"
              value={currentPage}
              onChange={(e) => handleJumpToPage(parseInt(e.target.value, 10))}
              min={1}
              max={totalPages}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default List;
