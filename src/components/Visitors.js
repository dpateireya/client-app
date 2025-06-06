import React from "react";
import SheetData from "./admin-page/SheetData";
import AddRecord from "./admin-page/AddRecord";

function Visitors() {
  return (
    <>
      <div className="App">
        <AddRecord />
      </div>
      <div className="App">
        <h1>Spreadsheet Data Viewer</h1>
        <SheetData />
      </div>
    </>
  );
}

export default Visitors;
