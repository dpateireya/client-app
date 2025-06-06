// Example usage in a React component
import React, { useState } from "react";
import { addData } from "../../service/ServerApi";
function AddRecordForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const row = [[form.name, form.email]]; // <-- correct format
      const result = await addData(row);
      alert("Record add ", result.status);
      setForm({ name: "", email: "" }); // Reset form after submission
      window.location.reload(); // Refresh the page
    } catch {
      alert("Error adding record");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Add Record</button>
    </form>
  );
}

export default AddRecordForm;
