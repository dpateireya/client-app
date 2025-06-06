import React, { useEffect, useState } from "react";
import { getData, deleteData, updateData } from "../../service/ServerApi"; // Adjust the import path as necessary
function SheetData() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRows();
  }, []);

  const fetchRows = () => {
    setLoading(true);
    getData()
      .then((data) => {
        setRows(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const handleDelete = async (idx) => {
    if (window.confirm("Are you sure you want to delete this row?")) {
      try {
        await deleteData(idx + 2); // +2 because Google Sheets rows start at 1 and you skip header
        fetchRows(); // Refresh data
      } catch (error) {
        alert("Error deleting row");
      }
    }
  };

  // Simple update handler using prompt
  const handleUpdate = async (idx, row) => {
    // Prompt for new values (for demo: name and email)
    const name = window.prompt("Enter new name:", row[0]);
    const email = window.prompt("Enter new email:", row[1]);
    if (name && email) {
      try {
        // Google Sheets expects { values: [[name, email]] }
        await updateData(idx + 2, [[name, email]]);
        fetchRows();
      } catch (error) {
        alert("Error updating row");
      }
    }
  };
  // Render loading state
  if (loading) return <div>Loading...</div>;

  return (
    <table border="1">
      <thead>
        <tr>
          <th>S No</th>
          <th>Customer Name</th>
          <th>E-mail ID</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
        {rows &&
          rows.map((row, idx) => (
            <tr key={idx}>
              <td key={idx}>{idx + 1}</td>
              {row.map((cell, cidx) => (
                <td key={cidx}>{cell}</td>
              ))}
              <td>
                <button onClick={() => handleUpdate(idx, row)}>Update</button>
              </td>
              <td>
                <button onClick={() => handleDelete(idx)}>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default SheetData;
