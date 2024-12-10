# react-demo-sdk


A comprehensive collection of customizable and functional UI components for React applications.

This library provides graphs, icons, lists, loaders, progress bars, tables, and more. 

Easily install this package and integrate these ready-to-use components in your React projects.

FEATURES : 

Graph: Render interactive graphs and charts, along with visualizing the records on hovering at the particular record.
Icon: Use predefined icons with the property names mentioned.
List: Render dynamic lists with various styles and options.
Loader: Show loading indicators during asynchronous operations.
Progress Bar: Display progress in tasks or operations.
Table: Tabular data display with customizable columns and rows, and features to select the records per page, pagination, etc.
Tooltip: Add tooltips to any element to provide extra information.



INSTALLATION : 
To install this library into your React project, run the following command:

npm install library-name

USAGE : 
Once the package is installed, you can import and use any of the components in your React application.


EXAMPLE: Table Component

<!--
import { Table } from 'library-name';

 function App() {
  return (
    <div>
      <Table data={data} />
    </div>
  );
} -->


Example: Graph Component

<!-- import { Graph } from 'library-name';

function App() {
 const data = [
    { name: 'January', value: 30 },
    { name: 'February', value: 60 },
    { name: 'March', value: 90 },
  ];
  return (
   <Graph data={data} type=pie title="abc..." />
  );
} -->


Example: Loader Component

<!-- import { Loader } from 'library-name';

function App() {
  return (
    <div>
      <Loaders.CatchUpSpinner color="green" />
    </div>
  );
} -->
