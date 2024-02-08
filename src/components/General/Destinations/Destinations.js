import React from "react";
import "./Destinations.css";
import { CiLocationOn } from "react-icons/ci";

const Destinations = () => {
  return (
    <div className="destinations section">
      <div className="secContainer container">
        <div className="secHeading grid">
          <h3 className="secTitle">We ship to four destinations</h3>
        </div>

        <div className="destinations-container flex">
          <div className="single-destination flex">
            <span>
              <CiLocationOn />
            </span>
            <span>Bremerhaven</span>
          </div>
          <div className="single-destination flex">
            <CiLocationOn />
            Gydinia, PL
          </div>
          <div className="single-destination flex">
            <CiLocationOn />
            Aston Martin
          </div>
          <div className="single-destination flex">
            <CiLocationOn />
            Rotterdam, NL
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
