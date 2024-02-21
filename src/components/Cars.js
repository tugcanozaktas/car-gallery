import React, { useState } from "react";
import { fetchVehicleData } from "../services/carModels";
import CarCard from "./CarCard";
import SideBar from "./SortBar";
import "../styles/Cars.css";

const Cars = () => {
  const [vehicleData, setVehicleData] = useState(null);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  console.log(vehicleData);
  const getCars = async (event) => {
    event.preventDefault();
    try {
      await fetchVehicleData({
        setVehicleData,
        make,
        model,
        year,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      setVehicleData(null);
    }
  };

  return (
    <div id="cars" className="cars-page-wrapper">
      <form onSubmit={getCars} className="search-bar">
        <label htmlFor="make">
          Make
          <input
            id="make"
            value={make}
            onChange={(event) => {
              setMake(event.target.value);
            }}
            placeholder="Honda"
          />
        </label>
        <label htmlFor="model">
          Model
          <input
            id="model"
            value={model}
            onChange={(event) => {
              setModel(event.target.value);
            }}
            type="text"
            placeholder="Civic"
          />
        </label>
        <label htmlFor="year">
          Year
          <input
            id="year"
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
            }}
            type="number"
            placeholder="2001"
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div className="search-results">
        {vehicleData !== null ? (
          <>
            <SideBar
              vehicleData={vehicleData}
              setVehicleData={setVehicleData}
            />
            <div className="search-wrapper">
              {vehicleData.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </>
        ) : (
          <h3 className="search-text">Search for car models!</h3>
        )}
      </div>
    </div>
  );
};

export default Cars;
