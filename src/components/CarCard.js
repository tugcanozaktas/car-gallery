import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faGasPump,
  faMoneyBill,
  faGear,
  faGears,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/CarCard.css"; // Import CSS file for styling

const CarCard = ({ car }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="car-card">
      <div className="car-details">
        <div className="car-title-wrapper">
          <h2>{`${car.make} ${car.model} (${car.year})`}</h2>
          <button
            onClick={() => {
              setIsClicked(!isClicked);
            }}
            type="button"
          >
            <FontAwesomeIcon className="icons" icon={faCaretDown} />
          </button>
        </div>
        <div
          className={`car-details-wrapper ${
            isClicked
              ? "open"
              : "" /* Apply "open" class when isClicked is true */
          }`}
        >
          <p>
            <strong>
              <FontAwesomeIcon className="icons" icon={faGasPump} />
              Fuel Type:
            </strong>{" "}
            {car.fueltype}
          </p>
          <p>
            <strong>
              <FontAwesomeIcon className="icons" icon={faMoneyBill} />
              Fuel Efficiency:
            </strong>{" "}
            City: <strong>{car.city08}</strong> MPG, Highway:{" "}
            <strong>{car.highway08}</strong> MPG, Combined:{" "}
            <strong>{car.comb08}</strong> MPG
          </p>
          <p>
            <strong>
              <FontAwesomeIcon className="icons" icon={faGear} />
              Engine:{" "}
            </strong>
            <strong>{car.cylinders}</strong> cylinders,{" "}
            <strong>{car.hpv}</strong> HP
          </p>
          <p>
            <strong>
              <FontAwesomeIcon className="icons" icon={faGears} />
              Transmission:
            </strong>{" "}
            {car.trany}
          </p>
          <p>
            <strong>
              <svg
                className="icons"
                id="svg"
                width="25"
                height="25"
                viewBox="0, 0, 400,400"
              >
                <g id="svgg">
                  <path
                    id="path0"
                    d="M180.078 0.509 C 57.151 13.726,-24.606 131.499,6.201 250.981 C 33.575 357.147,143.772 421.442,250.981 393.799 C 357.147 366.425,421.442 256.228,393.799 149.019 C 374.270 73.278,311.095 15.798,232.465 2.230 C 223.308 0.650,189.192 -0.471,180.078 0.509 M222.266 52.287 C 343.386 71.482,391.883 219.055,305.469 305.469 C 219.055 391.883,71.482 343.386,52.287 222.266 C 36.755 124.256,124.256 36.755,222.266 52.287 M187.891 66.858 C 172.756 68.963,165.049 70.617,156.641 73.566 C 69.993 103.952,38.664 208.724,94.371 281.813 C 146.660 350.418,253.340 350.418,305.629 281.813 C 361.332 208.729,329.984 103.895,243.359 73.569 C 228.449 68.349,201.025 65.031,187.891 66.858 M220.313 86.300 C 241.681 90.461,243.606 93.301,238.263 112.777 C 224.716 162.154,175.284 162.154,161.737 112.777 C 156.019 91.932,158.430 89.433,188.672 84.863 C 193.526 84.130,213.924 85.056,220.313 86.300 M128.790 115.174 C 134.837 118.301,148.406 138.515,152.430 150.391 C 161.117 176.030,141.343 194.671,109.797 190.580 C 90.243 188.045,84.605 183.255,87.539 171.671 C 94.800 143.001,118.865 110.042,128.790 115.174 M277.872 115.352 C 291.427 121.784,317.426 170.126,313.012 180.691 C 308.756 190.876,276.343 194.492,260.551 186.543 C 239.270 175.831,240.747 150.765,264.353 122.017 C 270.871 114.080,272.990 113.035,277.872 115.352 M208.110 168.368 C 232.554 174.735,240.858 205.176,223.017 223.017 C 204.226 241.808,172.261 231.472,167.752 205.147 C 163.837 182.293,185.561 162.495,208.110 168.368 M298.327 210.973 C 312.751 214.908,315.126 217.809,312.480 228.255 C 307.849 246.540,296.982 265.900,283.594 279.718 C 275.466 288.107,272.444 287.835,264.359 277.990 C 235.541 242.896,240.044 214.778,275.391 209.100 C 280.013 208.357,292.469 209.375,298.327 210.973 M132.031 212.009 C 160.859 221.286,162.109 247.041,135.323 279.796 C 127.427 289.451,124.524 289.381,114.988 279.308 C 99.297 262.731,82.968 228.655,86.848 220.586 C 90.699 212.579,117.809 207.432,132.031 212.009 M212.662 253.369 C 227.613 260.684,238.771 279.384,240.353 299.776 C 241.026 308.443,239.721 309.769,227.601 312.743 C 209.367 317.218,190.633 317.218,172.399 312.743 C 160.279 309.769,158.974 308.443,159.647 299.776 C 162.280 265.843,189.484 242.030,212.662 253.369 "
                    stroke="none"
                    fill="#000000"
                    fillRule="evenodd"
                  ></path>
                </g>
              </svg>
              Drive Type:
            </strong>{" "}
            {car.drive}
          </p>
          <p>
            <strong>
              <FontAwesomeIcon className="icons" icon={faCircleQuestion} />
              Vehicle Class:
            </strong>{" "}
            {car.vclass}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
