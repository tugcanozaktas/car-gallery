import React from "react";
import "../styles/CarCard.css"; // Import CSS file for styling

const CarCard = ({ car }) => {
  console.log(car);
  return (
    <div className="car-card">
      <div className="car-details">
        <h2>{`${car.fields.make} ${car.fields.model} (${car.fields.year})`}</h2>
        <p>
          <strong>Fuel Type:</strong> {car.fields.fueltype}
        </p>
        <p>
          <strong>Fuel Efficiency:</strong> City: {car.fields.city08} MPG,
          Highway: {car.fields.highway08} MPG, Combined: {car.fields.comb08} MPG
        </p>
        <p>
          <strong>Engine:</strong>
          {car.fields.cylinders} cylinders, {car.fields.hpv} HP
        </p>
        <p>
          <strong>Transmission:</strong> {car.fields.trany}
        </p>
        <p>
          <strong>Drive Type:</strong> {car.fields.drive}
        </p>
        <p>
          <strong>Vehicle Class:</strong> {car.fields.vclass}
        </p>
        {/* Additional features */}
      </div>
    </div>
  );
};

export default CarCard;
