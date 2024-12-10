"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _recharts = require("recharts");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Graph component that dynamically renders Pie, Bar, or Line chart
var Graph = function Graph(_ref) {
  var type = _ref.type,
    data = _ref.data,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 500 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 400 : _ref$height,
    _ref$colors = _ref.colors,
    colors = _ref$colors === void 0 ? [] : _ref$colors,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Graph Title" : _ref$title;
  var getRandomColor = function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  var getCategoryKey = function getCategoryKey(data) {
    var firstItem = data[0];
    return Object.keys(firstItem).find(function (key) {
      return typeof firstItem[key] !== 'number';
    }); // Non-numeric key (likely category)
  };

  //   const renderGraph = () => {
  //     const categoryKey = getCategoryKey(data);
  //     switch (type) {
  //       case "pie":
  //         return (
  //           <ResponsiveContainer width="100%" height={height}>
  //             <PieChart animationDuration={1000} animationEasing="ease-out">
  //               <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} fill="#8884d8">
  //                 {data.map((entry, index) => (
  //                   <Cell key={`cell-${index}`} fill={getRandomColor()} />
  //                 ))}
  //               </Pie>
  //               <Tooltip />
  //               <Legend />
  //             </PieChart>
  //           </ResponsiveContainer>
  //         );
  //       case "bar":
  //         return (
  //           <ResponsiveContainer width="100%" height={height}>
  //             <BarChart data={data} animationDuration={1000} animationEasing="ease-out">
  //               <CartesianGrid strokeDasharray="3 3" />
  //               <XAxis dataKey="name" />
  //               <YAxis />
  //               <BarTooltip />
  //               <BarLegend />
  //               {/* <Bar dataKey="value" fill={getRandomColor()} /> */}
  //               {/* {data.map((entry, index) => (
  //                   <Bar
  //                     key={`bar-${index}`}
  //                     dataKey="value"
  //                     fill={getRandomColor()}  // Apply random color to each bar
  //                   />
  //                 ))} */}
  //                 {Object.keys(data[0]).filter(key => key !== 'name').map((key, index) => (
  //             <Bar key={`bar-${index}`} dataKey={key} fill={getRandomColor()} />
  //           ))}
  //             </BarChart>
  //           </ResponsiveContainer>
  //         );
  //       case "line":
  //         return (
  //           <ResponsiveContainer width="100%" height={height}>
  //             <LineChart data={data} animationDuration={1000} animationEasing="ease-out">
  //               {/* <Line type="monotone" dataKey="value" stroke={getRandomColor()} /> */}
  //               <LineCartesianGrid strokeDasharray="3 3" />
  //               <LineXAxis dataKey="name" />
  //               <LineYAxis />
  //               <LineTooltip />
  //               <LineLegend />
  //               {Object.keys(data[0])
  //                 .filter(key => key !== "name") // Exclude the 'name' key
  //                 .map((key, index) => (
  //                   <Line
  //                     key={`line-${index}`}
  //                     type="monotone"
  //                     dataKey={key} // Use different keys for each line
  //                     stroke={getRandomColor()}  // Apply a random color to each line
  //                     dot={false} // Optional: To hide dots for the line chart, if you don't want them
  //                   />
  //                 ))}
  //             </LineChart>
  //           </ResponsiveContainer>
  //         );
  //         case 'area':
  //         return (
  //           <ResponsiveContainer width="100%" height={height}>
  //             <AreaChart data={data} animationDuration={1000} animationEasing="ease-out">
  //               <CartesianGrid strokeDasharray="3 3" />
  //               <XAxis dataKey="name" />
  //               <YAxis />
  //               <Tooltip />
  //               <Legend />
  //               {Object.keys(data[0])
  //                 .filter(key => key !== 'name')
  //                 .map((key, index) => (
  //                   <Area
  //                     key={`area-${index}`}
  //                     type="monotone"
  //                     dataKey={key}
  //                     stroke={getRandomColor()}
  //                     fill={getRandomColor()}
  //                     fillOpacity={0.3}
  //                   />
  //                 ))}
  //             </AreaChart>
  //           </ResponsiveContainer>
  //         );
  //       case 'scatter':
  //         return (
  //           <ResponsiveContainer width="100%" height={height}>
  //             <ScatterChart animationDuration={1000} animationEasing="ease-out">
  //               <CartesianGrid strokeDasharray="3 3" />
  //               <XAxis dataKey="name" />
  //               <YAxis />
  //               <Tooltip />
  //               <Legend />
  //               {Object.keys(data[0])
  //                 .filter(key => key !== 'name')
  //                 .map((key, index) => (
  //                   <Scatter
  //                     key={`scatter-${index}`}
  //                     data={data.map(entry => ({
  //                       name: entry.name,
  //                       value: entry[key]
  //                     }))}
  //                     fill={getRandomColor()}
  //                   />
  //                 ))}
  //             </ScatterChart>
  //           </ResponsiveContainer>
  //         );
  //       case 'radar':
  //         return (
  //           <ResponsiveContainer width="100%" height={height}>
  //             <RadarChart data={data}>
  //               <Radar name="Radar" dataKey="value" stroke={getRandomColor()} fill={getRandomColor()} fillOpacity={0.6} />
  //               <Legend />
  //               <Tooltip />
  //             </RadarChart>
  //           </ResponsiveContainer>
  //         );
  //       default:
  //         return <div>No Graph Type Selected</div>;
  //     }
  //   };

  // Render Pie chart
  var renderPieChart = function renderPieChart() {
    // return (
    //   <ResponsiveContainer width="100%" height={height}>
    //     <PieChart animationDuration={1000} animationEasing="ease-out">
    //       <Pie data={data} dataKey="value" nameKey="name" outerRadius={80}>
    //         {data.map((entry, index) => (
    //           <Cell key={`cell-${index}`} fill={getRandomColor()} />
    //         ))}
    //       </Pie>
    //       <Tooltip />
    //       <Legend />
    //     </PieChart>
    //   </ResponsiveContainer>
    // );

    var keys = Object.keys(data[0]); // Get the keys from the first object
    var nameKey = keys[0]; // Use the first key as name (if not 'value')
    var valueKey = keys.find(function (key) {
      return key !== nameKey;
    }); // Use the other key as value

    return /*#__PURE__*/_react["default"].createElement(_recharts.ResponsiveContainer, {
      width: "100%",
      height: 400
    }, /*#__PURE__*/_react["default"].createElement(_recharts.PieChart, {
      animationDuration: 1000,
      animationEasing: "ease-out"
    }, /*#__PURE__*/_react["default"].createElement(_recharts.Pie, {
      data: data,
      dataKey: valueKey // Use the dynamically determined value key
      ,
      nameKey: nameKey // Use the dynamically determined name key
      ,
      outerRadius: 80
    }, data.map(function (entry, index) {
      return /*#__PURE__*/_react["default"].createElement(_recharts.Cell, {
        key: "cell-".concat(index),
        fill: getRandomColor()
      });
    })), /*#__PURE__*/_react["default"].createElement(_recharts.Tooltip, null), /*#__PURE__*/_react["default"].createElement(_recharts.Legend, null)));
  };

  // Render Bar chart
  var renderBarChart = function renderBarChart() {
    var categoryKey = getCategoryKey(data); // Detect the category key

    return /*#__PURE__*/_react["default"].createElement(_recharts.ResponsiveContainer, {
      width: "100%",
      height: height
    }, /*#__PURE__*/_react["default"].createElement(_recharts.BarChart, {
      data: data,
      animationDuration: 1000,
      animationEasing: "ease-out"
    }, /*#__PURE__*/_react["default"].createElement(_recharts.CartesianGrid, {
      strokeDasharray: "3 3"
    }), /*#__PURE__*/_react["default"].createElement(_recharts.XAxis, {
      dataKey: categoryKey
    }), /*#__PURE__*/_react["default"].createElement(_recharts.YAxis, null), /*#__PURE__*/_react["default"].createElement(_recharts.Tooltip, null), /*#__PURE__*/_react["default"].createElement(_recharts.Legend, null), Object.keys(data[0]).filter(function (key) {
      return key !== categoryKey;
    }).map(function (key, index) {
      return /*#__PURE__*/_react["default"].createElement(_recharts.Bar, {
        key: "bar-".concat(index),
        dataKey: key,
        fill: getRandomColor()
      });
    })));
  };

  // Render Line chart
  var renderLineChart = function renderLineChart() {
    var categoryKey = getCategoryKey(data); // Detect the category key

    return /*#__PURE__*/_react["default"].createElement(_recharts.ResponsiveContainer, {
      width: "100%",
      height: height
    }, /*#__PURE__*/_react["default"].createElement(_recharts.LineChart, {
      data: data,
      animationDuration: 1000,
      animationEasing: "ease-out"
    }, /*#__PURE__*/_react["default"].createElement(_recharts.CartesianGrid, {
      strokeDasharray: "3 3"
    }), /*#__PURE__*/_react["default"].createElement(_recharts.XAxis, {
      dataKey: categoryKey
    }), /*#__PURE__*/_react["default"].createElement(_recharts.YAxis, null), /*#__PURE__*/_react["default"].createElement(_recharts.Tooltip, null), /*#__PURE__*/_react["default"].createElement(_recharts.Legend, null), Object.keys(data[0]).filter(function (key) {
      return key !== categoryKey;
    }).map(function (key, index) {
      return /*#__PURE__*/_react["default"].createElement(_recharts.Line, {
        key: "line-".concat(index),
        type: "monotone",
        dataKey: key,
        stroke: getRandomColor(),
        dot: false
      });
    })));
  };

  // Render Area chart
  var renderAreaChart = function renderAreaChart() {
    var categoryKey = getCategoryKey(data); // Detect the category key

    return /*#__PURE__*/_react["default"].createElement(_recharts.ResponsiveContainer, {
      width: "100%",
      height: height
    }, /*#__PURE__*/_react["default"].createElement(AreaChart, {
      data: data,
      animationDuration: 1000,
      animationEasing: "ease-out"
    }, /*#__PURE__*/_react["default"].createElement(_recharts.CartesianGrid, {
      strokeDasharray: "3 3"
    }), /*#__PURE__*/_react["default"].createElement(_recharts.XAxis, {
      dataKey: categoryKey
    }), /*#__PURE__*/_react["default"].createElement(_recharts.YAxis, null), /*#__PURE__*/_react["default"].createElement(_recharts.Tooltip, null), /*#__PURE__*/_react["default"].createElement(_recharts.Legend, null), Object.keys(data[0]).filter(function (key) {
      return key !== categoryKey;
    }).map(function (key, index) {
      return /*#__PURE__*/_react["default"].createElement(Area, {
        key: "area-".concat(index),
        type: "monotone",
        dataKey: key,
        stroke: getRandomColor(),
        fill: getRandomColor(),
        fillOpacity: 0.3
      });
    })));
  };

  // Dynamically render the chart based on type
  var renderGraph = function renderGraph() {
    switch (type) {
      case 'pie':
        return renderPieChart();
      case 'bar':
        return renderBarChart();
      case 'line':
        return renderLineChart();
      case 'area':
        return renderAreaChart();
      default:
        return /*#__PURE__*/_react["default"].createElement("div", null, "No Graph Type Selected");
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "graph-container",
    style: {
      width: width,
      margin: "0 auto"
    }
  }, /*#__PURE__*/_react["default"].createElement("h3", null, title), renderGraph())
  //     <div className="graph-container" style={{ width: width }}>
  //     <h3>{title}</h3>
  //     {renderGraph()}
  //   </div>
  ;
};
var _default = exports["default"] = Graph;