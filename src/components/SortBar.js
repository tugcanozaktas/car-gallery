/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import "../styles/SortBar.css";

function SideBar({ setVehicleData, vehicleData }) {
  const [yearSort, setYearSort] = useState(null);
  const [makeSort, setMakeSort] = useState(null);
  const [modelSort, setModelSort] = useState(null);
  const [sortType, setSortType] = useState("");

  const handleSort = (event) => {
    event.preventDefault();

    let sortedData = [...vehicleData];

    if (sortType) {
      const [sortingField, sortingOrder] = sortType.split(/(?=[A-Z])/);
      sortedData.sort((a, b) => {
        const aValue =
          sortingField === "year" ? parseInt(a[sortingField]) : a[sortingField];
        const bValue =
          sortingField === "year" ? parseInt(b[sortingField]) : b[sortingField];

        if (sortingOrder === "Asc") {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else if (sortingOrder === "Desc") {
          return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
        }
      });
    }

    setVehicleData(sortedData);
  };

  return (
    <div className="sidebar">
      <div className="sort-section">
        <form onSubmit={handleSort}>
          <label>
            Sort By:
            <select
              value={sortType}
              onChange={(event) => setSortType(event.target.value)}
            >
              <option value="">Select</option>
              <option value="yearAsc">Year Ascending</option>
              <option value="yearDesc">Year Descending</option>
              <option value="makeAsc">Make A-Z</option>
              <option value="makeDesc">Make Z-A</option>
              <option value="modelAsc">Model A-Z</option>
              <option value="modelDesc">Model Z-A</option>
            </select>
          </label>
          <button type="submit">Sort</button>
        </form>
      </div>
    </div>
  );
}

export default SideBar;
