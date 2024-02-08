import React from "react";
import "./PopularMakes.css";

const PopularMakes = () => {
  return (
    <div className="popular-makes section">
      <div className="secContainer container">
        <div className="secHeading grid">
          <h3 className="secTitle">Popular Makes</h3>
        </div>

        <div className="popular-makes-container flex">
          <div className="single-make ">Acura</div>
          <div className="single-make ">Alfa Romeo</div>
          <div className="single-make ">Aston Martin</div>
          <div className="single-make ">Audi</div>
          <div className="single-make ">Bentley</div>
          <div className="single-make ">BMW</div>
          <div className="single-make ">Cadillac</div>
          <div className="single-make ">Chevrolet</div>
        </div>
      </div>
    </div>
  );
};

export default PopularMakes;
