import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./VehicleOptions.css";

const VehicleOptions = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="trending section">
      <div className="secContainer container">
        <div data-aos="fade-up" className="secHeading flex">
          <h5 className="secTitle">
            {props.type}
            <span className="quantity"> ({props.quantity})</span>
          </h5>

          <div className="see-all">
            <button className="btn primaryBtn flex">See All</button>
          </div>
        </div>

        <div className="carContainer grid">
          <div className="singleCar grid" data-aos="fade-up">
            <div className="imgDiv">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                alt="Car"
              />
            </div>
            <h5 className="carTitle">Audi E-Tron</h5>

            <span className="time">1d 21h 42min 57s</span>

            <div className="price_seller flex">
              <span className="price">$12,345</span>
            </div>
          </div>
          <div className="singleCar grid" data-aos="fade-up">
            <div className="imgDiv">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                alt="Car"
              />
            </div>
            <h5 className="carTitle">Audi E-Tron</h5>

            <span className="time">1d 21h 42min 57s</span>

            <div className="price_seller flex">
              <span className="price">$12,345</span>
            </div>
          </div>
          <div className="singleCar grid" data-aos="fade-up">
            <div className="imgDiv">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                alt="Car"
              />
            </div>
            <h5 className="carTitle">Audi E-Tron</h5>

            <span className="time">1d 21h 42min 57s</span>

            <div className="price_seller flex">
              <span className="price">$12,345</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleOptions;
