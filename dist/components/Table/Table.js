"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Table.css");
var _fa = require("react-icons/fa");
var _reactLoading = _interopRequireDefault(require("react-loading"));
var _reactCsv = require("react-csv");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// const Table = ({ data }) => {
//     const [rows, setRows] = useState(data);

//     // return (
//     //     <div className="table-container">
//     //         <table className="custom-table">
//     //             <thead>
//     //                 <tr>
//     //                     {Object.keys(rows[0]).map((key) => (
//     //                         <th key={key}>{key}</th>
//     //                     ))}
//     //                 </tr>
//     //             </thead>
//     //             <tbody>
//     //                 {rows.map((row, rowIndex) => (
//     //                     <tr key={rowIndex}>
//     //                         {Object.values(row).map((value, colIndex) => (
//     //                             <td key={colIndex}>{value}</td>
//     //                         ))}
//     //                     </tr>
//     //                 ))}
//     //             </tbody>
//     //         </table>
//     //     </div>
//     // );

//     //////////////////////////////  sorting and pagination ////////////////////////////////////////

// // const allKeys = [...new Set(rows.flatMap((row) => Object.keys(row)))];

// //   // Step 2: State to manage sorting, filtering, and pagination
// //   const [filters, setFilters] = useState(allKeys.reduce((acc, key) => ({ ...acc, [key]: '' }), {}));
// //   const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [showFilterInput, setShowFilterInput] = useState({}); // New state for filter visibility
// //   const rowsPerPage = 5;

// //   // Step 3: Handle sorting logic
// //   const handleSort = (key) => {
// //     const newDirection = 
// //       sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';

// //     setSortConfig({ key, direction: newDirection });
// //   };

// //   // Step 4: Handle filter input change
// //   const handleFilterChange = (key, value) => {
// //     setFilters((prev) => ({ ...prev, [key]: value }));
// //   };

// //   // Step 5: Apply filtering to rows
// //   const filteredRows = rows.filter((row) =>
// //     allKeys.every((key) => {
// //       if (!filters[key]) return true; // No filter applied
// //       return row[key]?.toString().toLowerCase().includes(filters[key].toLowerCase());
// //     })
// //   );

// //   // Step 6: Sorting the rows based on the sortConfig
// //   const sortedRows = filteredRows.sort((a, b) => {
// //     if (!sortConfig.key) return 0;
// //     const valueA = a[sortConfig.key];
// //     const valueB = b[sortConfig.key];

// //     if (valueA < valueB) return sortConfig.direction === 'asc' ? -1 : 1;
// //     if (valueA > valueB) return sortConfig.direction === 'asc' ? 1 : -1;
// //     return 0;
// //   });

// //   // Step 7: Paginate the sorted and filtered rows
// //   const totalRows = sortedRows.length;
// //   const totalPages = Math.ceil(totalRows / rowsPerPage);
// //   const displayedRows = sortedRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

// //   // Step 8: Handle pagination navigation
// //   const handlePageChange = (page) => {
// //     setCurrentPage(page);
// //   };

// //   return (
// //     <div className="table-container">
// //       <table className="custom-table">
// //         <thead>
// //           <tr>
// //             {/* Render headers with sorting and filtering */}
// //             {allKeys.map((key) => (
// //               <th key={key}>
// //                 <div style={{ display: 'flex', alignItems: 'center' }}>
// //                   <span>{key}</span>
// //                   <FaFilter
// //                     style={{ marginLeft: 8, cursor: 'pointer' }}
// //                     onClick={() => {
// //                       setShowFilterInput((prev) => ({
// //                         ...prev,
// //                         [key]: !prev[key], // Toggle the filter input visibility
// //                       }));
// //                     }}
// //                   />
// //                   <FaSort
// //                     style={{ marginLeft: 8, cursor: 'pointer' }}
// //                     onClick={() => handleSort(key)}
// //                   />
// //                   {sortConfig.key === key && sortConfig.direction === 'asc' && (
// //                     <FaSortUp style={{ marginLeft: 8 }} />
// //                   )}
// //                   {sortConfig.key === key && sortConfig.direction === 'desc' && (
// //                     <FaSortDown style={{ marginLeft: 8 }} />
// //                   )}
// //                   {showFilterInput[key] && (
// //                     <input
// //                       type="text"
// //                       value={filters[key] || ''}
// //                       onChange={(e) => handleFilterChange(key, e.target.value)}
// //                       placeholder={`Filter ${key}`}
// //                       style={{ marginLeft: 10, width: 100 }}
// //                     />
// //                   )}
// //                 </div>
// //               </th>
// //             ))}
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {displayedRows.map((row, rowIndex) => (
// //             <tr key={rowIndex}>
// //               {/* Render table data */}
// //               {allKeys.map((key, colIndex) => (
// //                 <td key={colIndex}>{row[key] !== undefined ? row[key] : 'N/A'}</td>
// //               ))}
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       {/* Pagination Controls */}
// //       <div className="pagination">
// //         <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>
// //           Previous
// //         </button>
// //         <span>
// //           Page {currentPage} of {totalPages}
// //         </span>
// //         <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
// //           Next
// //         </button>
// //       </div>
// //     </div>
// //   );

// const [filters, setFilters] = useState(
//   Object.keys(rows[0]).reduce((acc, key) => ({ ...acc, [key]: '' }), {})
// );
// const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
// const [currentPage, setCurrentPage] = useState(1);
// const [searchQuery, setSearchQuery] = useState('');
// const [rowsPerPage, setRowsPerPage] = useState(5);
// const [selectedRows, setSelectedRows] = useState([]);
// const [isDarkMode, setIsDarkMode] = useState(false);
// const [isLoading, setIsLoading] = useState(false);
// const [openFilters, setOpenFilters] = useState({});

// const allKeys = [...new Set(rows.flatMap((row) => Object.keys(row)))];

// const handleSort = (key) => {
//   const newDirection =
//     sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
//   setSortConfig({ key, direction: newDirection });
// };

// const handleFilterChange = (key, value) => {
//   setFilters((prev) => ({ ...prev, [key]: value }));
// };

// const handleSearchChange = (e) => {
//   setSearchQuery(e.target.value);
// };

// const handleRowsPerPageChange = (e) => {
//   setRowsPerPage(parseInt(e.target.value, 10));
// };

// const handleSelectAll = () => {
//   if (selectedRows.length === rows.length) {
//     setSelectedRows([]);
//   } else {
//     setSelectedRows(rows.map((_, index) => index));
//   }
// };

// const handleRowSelect = (rowIndex) => {
//   setSelectedRows((prev) => {
//     if (prev.includes(rowIndex)) {
//       return prev.filter((index) => index !== rowIndex);
//     } else {
//       return [...prev, rowIndex];
//     }
//   });
// };

// const filteredRows = rows.filter((row) =>
//   Object.values(row).some((value) =>
//     value.toString().toLowerCase().includes(searchQuery.toLowerCase())
//   )
// );

// const sortedRows = filteredRows.sort((a, b) => {
//   if (!sortConfig.key) return 0;
//   const valueA = a[sortConfig.key];
//   const valueB = b[sortConfig.key];

//   if (valueA < valueB) return sortConfig.direction === 'asc' ? -1 : 1;
//   if (valueA > valueB) return sortConfig.direction === 'asc' ? 1 : -1;
//   return 0;
// });

// const totalRows = sortedRows.length;
// const totalPages = Math.ceil(totalRows / rowsPerPage);
// const displayedRows = sortedRows.slice(
//   (currentPage - 1) * rowsPerPage,
//   currentPage * rowsPerPage
// );

// const handlePageChange = (page) => {
//   setCurrentPage(page);
// };

// const handleJumpToPage = (page) => {
//   if (page > 0 && page <= totalPages) {
//     setCurrentPage(page);
//   }
// };

// const handleDarkModeToggle = () => {
//   setIsDarkMode((prev) => !prev);
// };

//   // CSV Export
//   const handleCSVExport = () => {
//     return selectedRows.length > 0
//       ? selectedRows.map((index) => data[index])
//       : data;
//   };

//   const handleToggleFilter = (key) => {
//     setOpenFilters((prev) => ({
//       ...prev,
//       [key]: !prev[key], // Toggle filter input visibility
//     }));
//   };

// return (
//   <div className={`table-container ${isDarkMode ? 'dark-mode' : ''}`}>
//     <div className="controls">
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearchChange}
//         placeholder="Search..."
//       />
//        <input
//           type="number"
//           value={rowsPerPage}
//           onChange={handleRowsPerPageChange}
//           min="1"
//           placeholder="Rows per page"
//         />
//       <CSVLink data={handleCSVExport()}>Export to CSV</CSVLink>
//       <button onClick={handleDarkModeToggle}>
//         {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//       </button>
//     </div>

//     {isLoading ? (
//       <ReactLoading type="spin" color="#000" />
//     ) : (
//       <>
//         <table className="custom-table">
//           <thead>
//             <tr>
//               <th>
//                 <input
//                   type="checkbox"
//                   onChange={handleSelectAll}
//                   checked={selectedRows.length === rows.length}
//                 />
//               </th>
//               {allKeys.map((key) => (
//                 <th key={key}>
//                   <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <span>{key}</span>
//                     {/* <FaFilter
//                       style={{ marginLeft: 8, cursor: 'pointer' }}
//                       onClick={() =>
//                         handleFilterChange(key, filters[key] === '' ? '' : filters[key])
//                       }
//                     /> */}
//                     <FaFilter
//                         style={{ marginLeft: 8, cursor: 'pointer' }}
//                         onClick={() => handleFilterChange(key, filters[key] === '' ? '' : filters[key])} // Toggle filter visibility on icon click
//                       />
//                       {openFilters[key] && ( // Only show filter input if toggled
//                         <input
//                           type="text"
//                           value={filters[key] || ''}
//                           // onChange={(e) => handleSearchChange(key, e.target.value)}
//                           onChange={handleSearchChange}
//                           placeholder={`Filter ${key}`}
//                           style={{ marginLeft: 8, width: 100 }}
//                         />
//                       )}
//                     <FaSort
//                       style={{ marginLeft: 8, cursor: 'pointer' }}
//                       onClick={() => handleSort(key)}
//                     />
//                     {sortConfig.key === key && sortConfig.direction === 'asc' && (
//                       <FaSortUp style={{ marginLeft: 8 }} />
//                     )}
//                     {sortConfig.key === key && sortConfig.direction === 'desc' && (
//                       <FaSortDown style={{ marginLeft: 8 }} />
//                     )}
//                     {/* {filters[key] && (
//                       <input
//                         type="text"
//                         value={filters[key] || ''}
//                         onChange={(e) => handleFilterChange(key, e.target.value)}
//                         placeholder={`Filter ${key}`}
//                         style={{ marginLeft: 10, width: 100 }}
//                       />
//                     )} */}
//                   </div>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {displayedRows.map((row, rowIndex) => (
//               <tr
//                 key={rowIndex}
//                 onClick={() => handleRowSelect(rowIndex)}
//                 className={selectedRows.includes(rowIndex) ? 'selected' : ''}
//               >
//                 <td>
//                   <input
//                     type="checkbox"
//                     checked={selectedRows.includes(rowIndex)}
//                     onChange={() => handleRowSelect(rowIndex)}
//                   />
//                 </td>
//                 {allKeys.map((key) => (
//                   <td key={key}>{row[key] !== undefined ? row[key] : 'N/A'}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <div className="pagination">
//           <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>
//             Previous
//           </button>
//           <span>
//             Page {currentPage} of {totalPages}
//           </span>
//           <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
//             Next
//           </button>
//           <input
//             type="number"
//             value={currentPage}
//             onChange={(e) => handleJumpToPage(parseInt(e.target.value, 10))}
//             min={1}
//             max={totalPages}
//           />
//         </div>
//       </>
//     )}
//   </div>
// );

// };

var Table = function Table(_ref) {
  var data = _ref.data;
  var _useState = (0, _react.useState)(Object.keys(data[0]).reduce(function (acc, key) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, ''));
    }, {})),
    _useState2 = _slicedToArray(_useState, 2),
    filters = _useState2[0],
    setFilters = _useState2[1];
  var _useState3 = (0, _react.useState)({
      key: null,
      direction: 'asc'
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    sortConfig = _useState4[0],
    setSortConfig = _useState4[1];
  var _useState5 = (0, _react.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    currentPage = _useState6[0],
    setCurrentPage = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    searchQuery = _useState8[0],
    setSearchQuery = _useState8[1];
  var _useState9 = (0, _react.useState)(5),
    _useState10 = _slicedToArray(_useState9, 2),
    rowsPerPage = _useState10[0],
    setRowsPerPage = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedRows = _useState12[0],
    setSelectedRows = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isDarkMode = _useState14[0],
    setIsDarkMode = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isLoading = _useState16[0],
    setIsLoading = _useState16[1];
  var _useState17 = (0, _react.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    openFilters = _useState18[0],
    setOpenFilters = _useState18[1];
  var allKeys = _toConsumableArray(new Set(data.flatMap(function (row) {
    return Object.keys(row);
  })));
  var handleSort = function handleSort(key) {
    var newDirection = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({
      key: key,
      direction: newDirection
    });
  };
  var handleFilterChange = function handleFilterChange(key, value) {
    setFilters(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, value));
    });
  };
  var handleSearchChange = function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  };
  var handleRowsPerPageChange = function handleRowsPerPageChange(e) {
    setRowsPerPage(parseInt(e.target.value, 10));
  };
  var handleSelectAll = function handleSelectAll() {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map(function (_, index) {
        return index;
      }));
    }
  };
  var handleRowSelect = function handleRowSelect(rowIndex) {
    setSelectedRows(function (prev) {
      if (prev.includes(rowIndex)) {
        return prev.filter(function (index) {
          return index !== rowIndex;
        });
      } else {
        return [].concat(_toConsumableArray(prev), [rowIndex]);
      }
    });
  };

  // Filter rows by search query
  var filteredRows = data.filter(function (row) {
    return Object.values(row).some(function (value) {
      return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
    });
  });

  // Apply column filters if any
  var filteredAndSortedRows = filteredRows.filter(function (row) {
    return Object.entries(filters).every(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];
      return value === '' || row[key].toString().toLowerCase().includes(value.toLowerCase());
    });
  });
  var sortedRows = filteredAndSortedRows.sort(function (a, b) {
    if (!sortConfig.key) return 0;
    var valueA = a[sortConfig.key];
    var valueB = b[sortConfig.key];
    if (valueA < valueB) return sortConfig.direction === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });
  var totalRows = sortedRows.length;
  var totalPages = Math.ceil(totalRows / rowsPerPage);
  var displayedRows = sortedRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  var handlePageChange = function handlePageChange(page) {
    setCurrentPage(page);
  };
  var handleJumpToPage = function handleJumpToPage(page) {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  var handleDarkModeToggle = function handleDarkModeToggle() {
    setIsDarkMode(function (prev) {
      return !prev;
    });
  };

  // CSV Export
  var handleCSVExport = function handleCSVExport() {
    return selectedRows.length > 0 ? selectedRows.map(function (index) {
      return data[index];
    }) : data;
  };
  var handleToggleFilter = function handleToggleFilter(key) {
    setOpenFilters(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, !prev[key]));
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-container ".concat(isDarkMode ? 'dark-mode' : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "controls"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    value: searchQuery,
    onChange: handleSearchChange,
    placeholder: "Search..."
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    value: rowsPerPage,
    onChange: handleRowsPerPageChange,
    min: "1",
    placeholder: "Rows per page"
  }), /*#__PURE__*/_react["default"].createElement(_reactCsv.CSVLink, {
    data: handleCSVExport()
  }, "Export to CSV"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleDarkModeToggle
  }, isDarkMode ? 'Light Mode' : 'Dark Mode')), isLoading ? /*#__PURE__*/_react["default"].createElement(_reactLoading["default"], {
    type: "spin",
    color: "#000"
  }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("table", {
    className: "custom-table"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    onChange: handleSelectAll,
    checked: selectedRows.length === data.length
  })), allKeys.map(function (key) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: key
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", null, key), /*#__PURE__*/_react["default"].createElement(_fa.FaFilter, {
      style: {
        marginLeft: 8,
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return handleToggleFilter(key);
      } // Toggle filter input visibility
    }), openFilters[key] &&
    /*#__PURE__*/
    // Only show filter input if toggled
    _react["default"].createElement("input", {
      type: "text",
      value: filters[key] || '',
      onChange: function onChange(e) {
        return handleFilterChange(key, e.target.value);
      },
      placeholder: "Filter ".concat(key),
      style: {
        marginLeft: 8,
        width: 100
      }
    }), /*#__PURE__*/_react["default"].createElement(_fa.FaSort, {
      style: {
        marginLeft: 8,
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return handleSort(key);
      }
    }), sortConfig.key === key && sortConfig.direction === 'asc' && /*#__PURE__*/_react["default"].createElement(_fa.FaSortUp, {
      style: {
        marginLeft: 8
      }
    }), sortConfig.key === key && sortConfig.direction === 'desc' && /*#__PURE__*/_react["default"].createElement(_fa.FaSortDown, {
      style: {
        marginLeft: 8
      }
    })));
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, displayedRows.map(function (row, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: rowIndex,
      onClick: function onClick() {
        return handleRowSelect(rowIndex);
      },
      className: selectedRows.includes(rowIndex) ? 'selected' : ''
    }, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("input", {
      type: "checkbox",
      checked: selectedRows.includes(rowIndex),
      onChange: function onChange() {
        return handleRowSelect(rowIndex);
      }
    })), allKeys.map(function (key) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: key
      }, row[key] !== undefined ? row[key] : 'N/A');
    }));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return handlePageChange(currentPage - 1);
    },
    disabled: currentPage <= 1
  }, "Previous"), /*#__PURE__*/_react["default"].createElement("span", null, "Page ", currentPage, " of ", totalPages), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return handlePageChange(currentPage + 1);
    },
    disabled: currentPage >= totalPages
  }, "Next"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    value: currentPage,
    onChange: function onChange(e) {
      return handleJumpToPage(parseInt(e.target.value, 10));
    },
    min: 1,
    max: totalPages
  }))));
};
var _default = exports["default"] = Table;