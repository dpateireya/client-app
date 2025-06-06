import React from "react";
import SheetData from "./SheetData";
import AddRecord from "./AddRecord";

function AdminPage() {
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

export default AdminPage;
