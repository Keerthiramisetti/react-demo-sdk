import React, { useState } from 'react';
import './Table.css';
import { FaFilter, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import ReactLoading from 'react-loading';
import { CSVLink } from 'react-csv';

const Table = ({ data }) => {
  const [filters, setFilters] = useState(
    Object.keys(data[0]).reduce((acc, key) => ({ ...acc, [key]: '' }), {})
  );
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openFilters, setOpenFilters] = useState({});

  const allKeys = [...new Set(data.flatMap((row) => Object.keys(row)))];

  const handleSort = (key) => {
    const newDirection =
      sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction: newDirection });
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
  };

  const handleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((_, index) => index));
    }
  };

  const handleRowSelect = (rowIndex) => {
    setSelectedRows((prev) => {
      if (prev.includes(rowIndex)) {
        return prev.filter((index) => index !== rowIndex);
      } else {
        return [...prev, rowIndex];
      }
    });
  };

  // Filter rows by search query
  const filteredRows = data.filter((row) => {
    return Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Apply column filters if any
  const filteredAndSortedRows = filteredRows.filter((row) =>
    Object.entries(filters).every(([key, value]) => 
      value === '' || row[key].toString().toLowerCase().includes(value.toLowerCase())
    )
  );

  const sortedRows = filteredAndSortedRows.sort((a, b) => {
    if (!sortConfig.key) return 0;
    const valueA = a[sortConfig.key];
    const valueB = b[sortConfig.key];

    if (valueA < valueB) return sortConfig.direction === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const totalRows = sortedRows.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const displayedRows = sortedRows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
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
    return selectedRows.length > 0
      ? selectedRows.map((index) => data[index])
      : data;
  };

  const handleToggleFilter = (key) => {
    setOpenFilters((prev) => ({
      ...prev,
      [key]: !prev[key], // Toggle filter input visibility
    }));
  };

  return (
    <div className={`table-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="controls">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <input
          type="number"
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          min="1"
          placeholder="Rows per page"
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
          <table className="custom-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedRows.length === data.length}
                  />
                </th>
                {allKeys.map((key) => (
                  <th key={key}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span>{key}</span>
                      <FaFilter
                        style={{ marginLeft: 8, cursor: 'pointer' }}
                        onClick={() => handleToggleFilter(key)} // Toggle filter input visibility
                      />
                      {openFilters[key] && ( // Only show filter input if toggled
                        <input
                          type="text"
                          value={filters[key] || ''}
                          onChange={(e) => handleFilterChange(key, e.target.value)}
                          placeholder={`Filter ${key}`}
                          style={{ marginLeft: 8, width: 100 }}
                        />
                      )}
                      <FaSort
                        style={{ marginLeft: 8, cursor: 'pointer' }}
                        onClick={() => handleSort(key)}
                      />
                      {sortConfig.key === key && sortConfig.direction === 'asc' && (
                        <FaSortUp style={{ marginLeft: 8 }} />
                      )}
                      {sortConfig.key === key && sortConfig.direction === 'desc' && (
                        <FaSortDown style={{ marginLeft: 8 }} />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedRows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  onClick={() => handleRowSelect(rowIndex)}
                  className={selectedRows.includes(rowIndex) ? 'selected' : ''}
                >
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(rowIndex)}
                      onChange={() => handleRowSelect(rowIndex)}
                    />
                  </td>
                  {allKeys.map((key) => (
                    <td key={key}>{row[key] !== undefined ? row[key] : 'N/A'}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

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

export default Table;