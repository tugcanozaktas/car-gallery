import axios from "axios";

export async function fetchVehicleData({ setVehicleData, make, model, year }) {
  try {
    // Define the URL for the API endpoint
    let apiUrl = `https://public.opendatasoft.com/api/v2/catalog/datasets/all-vehicles-model/records?limit=100`;
    if (make) apiUrl += `&refine=make%3A%22${make}%22`;
    if (model) apiUrl += `&refine=model%3A%22${model}%22`;
    if (year) apiUrl += `&refine=year%3A%22${year}%22`;
    console.log("API URL:", apiUrl); // Check the constructed URL
    const response = await axios.get(apiUrl);
    const data = response.data;
    console.log("API Response:", data); // Check the response data
    setVehicleData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
