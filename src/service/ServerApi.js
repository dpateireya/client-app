import axios from "axios"; // Import axios

const baseUrl = "http://192.168.38.163:5000";
const getData = async () => {
  try {
    const response = (await axios.get(`${baseUrl}/get-data`)) || {
      data: { data: [] },
    };
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw to handle it in the component
  }
};

const getDataByName = async (name) => {
  try {
    const response = await axios.get(`${baseUrl}/get-data/${name}`);
    return response.data.data || [];
  } catch (error) {
    console.error(`Error fetching data for ${name}:`, error);
    throw error; // Re-throw to handle it in the component
  }
};

const getRowIndexByName = async (name) => {
  try {
    const response = await axios.get(`${baseUrl}/get-row-index/${name}`);
    return response.data.index || -1; // Return -1 if not found
  } catch (error) {
    console.error(`Error fetching row index for ${name}:`, error);
    throw error; // Re-throw to handle it in the component
  }
};

const addData = async (values) => {
  try {
    const response = await axios.post(`${baseUrl}/add-data`, { values });
    return response.data;
  } catch (error) {
    console.error("Error adding row:", error);
    throw error;
  }
};

const deleteData = async (rowIndex) => {
  try {
    const response = await axios.delete(`${baseUrl}/delete-data/${rowIndex}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting row:", error);
    throw error;
  }
};

const updateData = async (rowIndex, values) => {
  try {
    const response = await axios.put(`${baseUrl}/update-data/${rowIndex}`, {
      values,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating row:", error);
    throw error;
  }
};
export {
  getData,
  getDataByName,
  getRowIndexByName,
  addData,
  updateData,
  deleteData,
};

// Export the functions to be used in components
