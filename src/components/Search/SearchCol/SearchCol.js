import React from "react";
import DashboardBox from "../../General/DashboardBox/DashboardBox";
import "./SearchCol.css";

const cars = [
  "Supra",
  "GTR",
  "Civic",
  "GTR",
  "Civic",
  "GTR",
  "Civic",
  "GTR",
  "Civic",
  "GTR",
  "Civic",
];

const SearchCol = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <DashboardBox className="car-search">
        <span className="secTitle">{props.title}</span>
        <div className="cars flex">
          {cars.map((car) => (
            <div className="car">{car}</div>
          ))}
        </div>
      </DashboardBox>
      <DashboardBox></DashboardBox>
      <DashboardBox></DashboardBox>
    </div>
  );
};

export default SearchCol;
