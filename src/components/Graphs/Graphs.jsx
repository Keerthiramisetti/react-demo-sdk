import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip, Legend as BarLegend, Bar as BarGraph } from "recharts";
import { LineChart, Line, CartesianGrid as LineCartesianGrid, XAxis as LineXAxis, YAxis as LineYAxis, Tooltip as LineTooltip, Legend as LineLegend } from "recharts";

// Graph component that dynamically renders Pie, Bar, or Line chart
const Graph = ({ type, data, width = 500, height = 400, colors = [], title = "Graph Title" }) => {
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };

      const getCategoryKey = (data) => {
        const firstItem = data[0];
        return Object.keys(firstItem).find(key => typeof firstItem[key] !== 'number'); // Non-numeric key (likely category)
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
const renderPieChart = () => {
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

    const keys = Object.keys(data[0]); // Get the keys from the first object
  const nameKey = keys[0]; // Use the first key as name (if not 'value')
  const valueKey = keys.find(key => key !== nameKey); // Use the other key as value

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart animationDuration={1000} animationEasing="ease-out">
        <Pie
          data={data}
          dataKey={valueKey}  // Use the dynamically determined value key
          nameKey={nameKey}    // Use the dynamically determined name key
          outerRadius={80}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getRandomColor()} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
  };

  // Render Bar chart
  const renderBarChart = () => {
    const categoryKey = getCategoryKey(data); // Detect the category key

    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} animationDuration={1000} animationEasing="ease-out">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={categoryKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Render Bar dynamically based on data keys */}
          {Object.keys(data[0]).filter(key => key !== categoryKey).map((key, index) => (
            <Bar key={`bar-${index}`} dataKey={key} fill={getRandomColor()} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  };

  // Render Line chart
  const renderLineChart = () => {
    const categoryKey = getCategoryKey(data); // Detect the category key

    return (
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} animationDuration={1000} animationEasing="ease-out">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={categoryKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Render Line dynamically based on data keys */}
          {Object.keys(data[0]).filter(key => key !== categoryKey).map((key, index) => (
            <Line key={`line-${index}`} type="monotone" dataKey={key} stroke={getRandomColor()} dot={false} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  };

  // Render Area chart
  const renderAreaChart = () => {
    const categoryKey = getCategoryKey(data); // Detect the category key

    return (
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} animationDuration={1000} animationEasing="ease-out">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={categoryKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Render Area dynamically based on data keys */}
          {Object.keys(data[0]).filter(key => key !== categoryKey).map((key, index) => (
            <Area
              key={`area-${index}`}
              type="monotone"
              dataKey={key}
              stroke={getRandomColor()}
              fill={getRandomColor()}
              fillOpacity={0.3}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    );
  };

  // Dynamically render the chart based on type
  const renderGraph = () => {
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
        return <div>No Graph Type Selected</div>;
    }
  };

  return (
    <div className="graph-container" style={{ width: width, margin: "0 auto" }}>
      <h3>{title}</h3>
      {renderGraph()}
    </div>
//     <div className="graph-container" style={{ width: width }}>
//     <h3>{title}</h3>
//     {renderGraph()}
//   </div>
  );
};

export default Graph;
