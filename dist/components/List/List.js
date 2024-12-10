"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _reactLoading = _interopRequireDefault(require("react-loading"));
var _reactCsv = require("react-csv");
require("./List.css");
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
var List = function List(_ref) {
  var items = _ref.items,
    _ref$isOrdered = _ref.isOrdered,
    isOrdered = _ref$isOrdered === void 0 ? false : _ref$isOrdered,
    _ref$showIcons = _ref.showIcons,
    showIcons = _ref$showIcons === void 0 ? false : _ref$showIcons;
  var _useState = (0, _react.useState)(Object.keys(items[0] || {}).reduce(function (acc, key) {
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
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    searchQuery = _useState6[0],
    setSearchQuery = _useState6[1];
  var _useState7 = (0, _react.useState)(1),
    _useState8 = _slicedToArray(_useState7, 2),
    currentPage = _useState8[0],
    setCurrentPage = _useState8[1];
  var _useState9 = (0, _react.useState)(5),
    _useState10 = _slicedToArray(_useState9, 2),
    itemsPerPage = _useState10[0],
    setItemsPerPage = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedItems = _useState12[0],
    setSelectedItems = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isDarkMode = _useState14[0],
    setIsDarkMode = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isLoading = _useState16[0],
    setIsLoading = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    expandedItems = _useState18[0],
    setExpandedItems = _useState18[1];
  var allKeys = _toConsumableArray(new Set(items.flatMap(function (item) {
    return Object.keys(item);
  })));
  var handleSort = function handleSort(key) {
    var newDirection = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({
      key: key,
      direction: newDirection
    });
  };
  var handleSearchChange = function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  };
  var handleItemsPerPageChange = function handleItemsPerPageChange(e) {
    setItemsPerPage(parseInt(e.target.value, 10));
  };
  var handleSelectAll = function handleSelectAll() {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map(function (_, index) {
        return index;
      }));
    }
  };
  var handleItemSelect = function handleItemSelect(itemIndex) {
    setSelectedItems(function (prev) {
      if (prev.includes(itemIndex)) {
        return prev.filter(function (index) {
          return index !== itemIndex;
        });
      } else {
        return [].concat(_toConsumableArray(prev), [itemIndex]);
      }
    });
  };
  var handleToggleExpandItem = function handleToggleExpandItem(itemIndex) {
    setExpandedItems(function (prev) {
      return prev.includes(itemIndex) ? prev.filter(function (index) {
        return index !== itemIndex;
      }) : [].concat(_toConsumableArray(prev), [itemIndex]);
    });
  };
  var filteredItems = items.filter(function (item) {
    return Object.values(item).some(function (value) {
      return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
    });
  });
  var sortedItems = filteredItems.sort(function (a, b) {
    if (!sortConfig.key) return 0;
    var valueA = a[sortConfig.key];
    var valueB = b[sortConfig.key];
    if (valueA < valueB) return sortConfig.direction === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });
  var totalItems = sortedItems.length;
  var totalPages = Math.ceil(totalItems / itemsPerPage);
  var displayedItems = sortedItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
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
    return selectedItems.length > 0 ? selectedItems.map(function (index) {
      return items[index];
    }) : items;
  };

  // return (
  //   <div className={`list-container ${isDarkMode ? 'dark-mode' : ''}`}>
  //     <div className="controls">
  //       <input
  //         type="text"
  //         value={searchQuery}
  //         onChange={handleSearchChange}
  //         placeholder="Search..."
  //       />
  //       <input
  //         type="number"
  //         value={itemsPerPage}
  //         onChange={handleItemsPerPageChange}
  //         min="1"
  //         placeholder="Items per page"
  //       />
  //       <CSVLink data={handleCSVExport()}>Export to CSV</CSVLink>
  //       <button onClick={handleDarkModeToggle}>
  //         {isDarkMode ? 'Light Mode' : 'Dark Mode'}
  //       </button>
  //     </div>

  //     {isLoading ? (
  //       <ReactLoading type="spin" color="#000" />
  //     ) : (
  //       <>
  //         {isOrdered ? (
  //           <ol className="custom-list ordered-list">
  //             {displayedItems.map((item, itemIndex) => (
  //               <li
  //                 key={itemIndex}
  //                 className={selectedItems.includes(itemIndex) ? 'selected' : ''}
  //                 onClick={() => handleItemSelect(itemIndex)}
  //               >
  //                 <div className="list-item-content">
  //                   {showIcons && (
  //                     <span className="item-icon">
  //                       {selectedItems.includes(itemIndex) ? <FaCheckCircle /> : <FaCircle />}
  //                     </span>
  //                   )}
  //                   <div>
  //                     {allKeys.map((key) => (
  //                       <span key={key}>
  //                         <strong>{key}: </strong>
  //                         {item[key] !== undefined ? item[key] : 'N/A'}
  //                       </span>
  //                     ))}
  //                   </div>
  //                   <button
  //                     onClick={(e) => {
  //                       e.stopPropagation();
  //                       handleToggleExpandItem(itemIndex);
  //                     }}
  //                     className="expand-button"
  //                   >
  //                     {expandedItems.includes(itemIndex) ? <FaChevronUp /> : <FaChevronDown />}
  //                   </button>
  //                 </div>
  //                 {expandedItems.includes(itemIndex) && (
  //                   <div className="expanded-content">
  //                     <p>More details about the item</p>
  //                   </div>
  //                 )}
  //               </li>
  //             ))}
  //           </ol>
  //         ) : (
  //           <ul className="custom-list unordered-list">
  //             {displayedItems.map((item, itemIndex) => (
  //               <li
  //                 key={itemIndex}
  //                 className={selectedItems.includes(itemIndex) ? 'selected' : ''}
  //                 onClick={() => handleItemSelect(itemIndex)}
  //               >
  //                 <div className="list-item-content">
  //                   {showIcons && (
  //                     <span className="item-icon">
  //                       {selectedItems.includes(itemIndex) ? <FaCheckCircle /> : <FaCircle />}
  //                     </span>
  //                   )}
  //                   <div>
  //                     {allKeys.map((key) => (
  //                       <span key={key}>
  //                         <strong>{key}: </strong>
  //                         {item[key] !== undefined ? item[key] : 'N/A'}
  //                       </span>
  //                     ))}
  //                   </div>
  //                   <button
  //                     onClick={(e) => {
  //                       e.stopPropagation();
  //                       handleToggleExpandItem(itemIndex);
  //                     }}
  //                     className="expand-button"
  //                   >
  //                     {expandedItems.includes(itemIndex) ? <FaChevronUp /> : <FaChevronDown />}
  //                   </button>
  //                 </div>
  //                 {expandedItems.includes(itemIndex) && (
  //                   <div className="expanded-content">
  //                     <p>More details about the item</p>
  //                   </div>
  //                 )}
  //               </li>
  //             ))}
  //           </ul>
  //         )}

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

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "list-container ".concat(isDarkMode ? 'dark-mode' : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "controls"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    value: searchQuery,
    onChange: handleSearchChange,
    placeholder: "Search..."
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    value: itemsPerPage,
    onChange: handleItemsPerPageChange,
    min: "1",
    placeholder: "Items per page"
  }), /*#__PURE__*/_react["default"].createElement(_reactCsv.CSVLink, {
    data: handleCSVExport()
  }, "Export to CSV"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleDarkModeToggle
  }, isDarkMode ? 'Light Mode' : 'Dark Mode')), isLoading ? /*#__PURE__*/_react["default"].createElement(_reactLoading["default"], {
    type: "spin",
    color: "#000"
  }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isOrdered ? /*#__PURE__*/_react["default"].createElement("ol", {
    className: "custom-list ordered-list"
  }, displayedItems.map(function (item, itemIndex) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: itemIndex,
      className: "list-item ".concat(selectedItems.includes(itemIndex) ? 'selected' : ''),
      onClick: function onClick() {
        return handleItemSelect(itemIndex);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "list-item-content"
    }, showIcons && /*#__PURE__*/_react["default"].createElement("span", {
      className: "item-icon"
    }, selectedItems.includes(itemIndex) ? /*#__PURE__*/_react["default"].createElement(_fa.FaCheckCircle, null) : /*#__PURE__*/_react["default"].createElement(_fa.FaCircle, null)), /*#__PURE__*/_react["default"].createElement("div", null, allKeys.map(function (key) {
      return /*#__PURE__*/_react["default"].createElement("span", {
        key: key
      }, /*#__PURE__*/_react["default"].createElement("strong", null, key, ": "), item[key] !== undefined ? item[key] : 'N/A');
    })), /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        handleToggleExpandItem(itemIndex);
      },
      className: "expand-button"
    }, expandedItems.includes(itemIndex) ? /*#__PURE__*/_react["default"].createElement(_fa.FaChevronUp, null) : /*#__PURE__*/_react["default"].createElement(_fa.FaChevronDown, null))), expandedItems.includes(itemIndex) && /*#__PURE__*/_react["default"].createElement("div", {
      className: "expanded-content"
    }, /*#__PURE__*/_react["default"].createElement("p", null, "More details about the item")));
  })) : /*#__PURE__*/_react["default"].createElement("ul", {
    className: "custom-list unordered-list"
  }, displayedItems.map(function (item, itemIndex) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: itemIndex,
      className: "list-item ".concat(selectedItems.includes(itemIndex) ? 'selected' : ''),
      onClick: function onClick() {
        return handleItemSelect(itemIndex);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "list-item-content"
    }, showIcons && /*#__PURE__*/_react["default"].createElement("span", {
      className: "item-icon"
    }, selectedItems.includes(itemIndex) ? /*#__PURE__*/_react["default"].createElement(_fa.FaCheckCircle, null) : /*#__PURE__*/_react["default"].createElement(_fa.FaCircle, null)), /*#__PURE__*/_react["default"].createElement("div", null, allKeys.map(function (key) {
      return /*#__PURE__*/_react["default"].createElement("span", {
        key: key
      }, /*#__PURE__*/_react["default"].createElement("strong", null, key, ": "), item[key] !== undefined ? item[key] : 'N/A');
    })), /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        handleToggleExpandItem(itemIndex);
      },
      className: "expand-button"
    }, expandedItems.includes(itemIndex) ? /*#__PURE__*/_react["default"].createElement(_fa.FaChevronUp, null) : /*#__PURE__*/_react["default"].createElement(_fa.FaChevronDown, null))), expandedItems.includes(itemIndex) && /*#__PURE__*/_react["default"].createElement("div", {
      className: "expanded-content"
    }, /*#__PURE__*/_react["default"].createElement("p", null, "More details about the item")));
  })), /*#__PURE__*/_react["default"].createElement("div", {
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

/// slight difference about the item selection
// const List = ({items, isOrdered = false, showIcons = false}) => {
//   const [filters, setFilters] = useState(
//     Object.keys(items[0] || {}).reduce((acc, key) => ({ ...acc, [key]: '' }), {})
//   );
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(5);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [expandedItems, setExpandedItems] = useState([]);

//   const allKeys = [...new Set(items.flatMap((item) => Object.keys(item)))];

//   const handleSort = (key) => {
//     const newDirection =
//       sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
//     setSortConfig({ key, direction: newDirection });
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleItemsPerPageChange = (e) => {
//     setItemsPerPage(parseInt(e.target.value, 10));
//   };

//   const handleSelectAll = () => {
//     if (selectedItems.length === items.length) {
//       setSelectedItems([]);
//     } else {
//       setSelectedItems(items.map((_, index) => index));
//     }
//   };

//   const handleItemSelect = (itemIndex) => {
//     setSelectedItems((prev) => {
//       if (prev.includes(itemIndex)) {
//         return prev.filter((index) => index !== itemIndex);
//       } else {
//         return [...prev, itemIndex];
//       }
//     });
//   };

//   const handleToggleExpandItem = (itemIndex) => {
//     setExpandedItems((prev) =>
//       prev.includes(itemIndex)
//         ? prev.filter((index) => index !== itemIndex)
//         : [...prev, itemIndex]
//     );
//   };

//   const filteredItems = items.filter((item) =>
//     Object.values(item).some((value) =>
//       value.toString().toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   );

//   const sortedItems = filteredItems.sort((a, b) => {
//     if (!sortConfig.key) return 0;
//     const valueA = a[sortConfig.key];
//     const valueB = b[sortConfig.key];

//     if (valueA < valueB) return sortConfig.direction === 'asc' ? -1 : 1;
//     if (valueA > valueB) return sortConfig.direction === 'asc' ? 1 : -1;
//     return 0;
//   });

//   const totalItems = sortedItems.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const displayedItems = sortedItems.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleJumpToPage = (page) => {
//     if (page > 0 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const handleDarkModeToggle = () => {
//     setIsDarkMode((prev) => !prev);
//   };

//   // CSV Export
//   const handleCSVExport = () => {
//     return selectedItems.length > 0
//       ? selectedItems.map((index) => items[index])
//       : items;
//   };

//   return (
//     <div className={`list-container ${isDarkMode ? 'dark-mode' : ''}`}>
//       <div className="controls">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           placeholder="Search..."
//         />
//         <input
//           type="number"
//           value={itemsPerPage}
//           onChange={handleItemsPerPageChange}
//           min="1"
//           placeholder="Items per page"
//         />
//         <CSVLink data={handleCSVExport()}>Export to CSV</CSVLink>
//         <button onClick={handleDarkModeToggle}>
//           {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//         </button>
//       </div>

//       {isLoading ? (
//         <ReactLoading type="spin" color="#000" />
//       ) : (
//         <>
//           <ul className={`custom-list ${isOrdered ? 'ordered' : 'unordered'}`}>
//             {displayedItems.map((item, itemIndex) => (
//               <li
//                 key={itemIndex}
//                 className={selectedItems.includes(itemIndex) ? 'selected' : ''}
//               >
//                 <input
//                   type="checkbox"
//                   checked={selectedItems.includes(itemIndex)}
//                   onChange={() => handleItemSelect(itemIndex)}
//                 />
//                 <div>
//                   {allKeys.map((key) => (
//                     <span key={key}>
//                       <strong>{key}: </strong>{item[key] !== undefined ? item[key] : 'N/A'}
//                     </span>
//                   ))}
//                 </div>
//                 <button onClick={() => handleToggleExpandItem(itemIndex)}>
//                   {expandedItems.includes(itemIndex) ? (
//                     <FaChevronUp />
//                   ) : (
//                     <FaChevronDown />
//                   )}
//                 </button>
//                 {expandedItems.includes(itemIndex) && (
//                   <div className="expanded-content">
//                     <p>More details about the item</p>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>

//           <div className="pagination">
//             <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>
//               Previous
//             </button>
//             <span>
//               Page {currentPage} of {totalPages}
//             </span>
//             <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
//               Next
//             </button>
//             <input
//               type="number"
//               value={currentPage}
//               onChange={(e) => handleJumpToPage(parseInt(e.target.value, 10))}
//               min={1}
//               max={totalPages}
//             />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
var _default = exports["default"] = List;