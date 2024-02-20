import React, { useState, useEffect } from "react";
import { fetchVehicleData } from "../services/carModels";
import CarCard from "./CarCard";
import "../styles/Cars.css";

const Cars = () => {
  const [vehicleData, setVehicleData] = useState(null);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState(null);

  const getCars = async (event) => {
    event.preventDefault();
    try {
      const data = await fetchVehicleData({
        setVehicleData,
        make,
        model,
        year,
      });
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setVehicleData(null);
      setError("Error fetching data. Please try again.");
    }
  };

  return (
    <div className="cars-page-wrapper">
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
          <div className="search-wrapper">
            {vehicleData.records.map((car) => (
              <CarCard key={car.record.id} car={car.record} />
            ))}
          </div>
        ) : (
          <div>No results</div>
        )}
      </div>
    </div>
  );
};

export default Cars;
