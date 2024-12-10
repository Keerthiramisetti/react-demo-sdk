# react-demo-sdk


A comprehensive collection of customizable and functional UI components for React applications.

This library provides buttons, checkboxes, dropdowns, graphs, icons, input fields, lists, loaders, progress bars, radio buttons, tables, text areas, toggle switches, tooltips, and more. 

Easily install this package and integrate these ready-to-use components in your React projects.

FEATURES : 

Button: Customizable buttons with different sizes, colors, icons and click handlers.
Checkbox: Provides single or multiple checkbox options.
Dropdown: Create dropdown menus with dynamic items.
Graph: Render interactive graphs and charts, along with visualizing the records on hovering at the particular record.
Icon: Use predefined icons with the property names mentioned.
Input Field: Text, email, password, etc input fields with validation support.
List: Render dynamic lists with various styles and options.
Loader: Show loading indicators during asynchronous operations.
Progress Bar: Display progress in tasks or operations.
Radio Button: Grouped radio buttons with flexible choices.
Table: Tabular data display with customizable columns and rows, and features to select the records per page, pagination, etc.
Text Area: Multi-line input field with auto-resize feature.
Toggle Switch: Implement toggles for boolean values.
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
