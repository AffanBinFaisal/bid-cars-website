import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./VehicleOptions.css";
import { useDispatch } from "react-redux";
import { searchChanged } from "../../../redux/slice/searchSlice";
import { fetchResults } from "../../../redux/slice/resultsSlice";
import { useNavigate } from "react-router";

const VehicleOptions = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  const handleClick = () => {
    const payload = { make: props.type };
    dispatch(searchChanged(payload));
    dispatch(fetchResults(payload));
    navigate("/search/results");
  };

  return (
    <div className="trending section">
      <div className="secContainer container">
        <div data-aos="fade-up" className="secHeading flex">
          <h5 className="secTitle">{props.type} Cars</h5>

          <div className="see-all">
            <button className="btn primaryBtn flex" onClick={handleClick}>
              See All
            </button>
          </div>
        </div>

        <div className="carContainer grid">
          {props.cars &&
            props.cars.map((car) => (
              <div className="singleCar grid" data-aos="fade-up">
                <div className="imgDiv">
                  <img src={car.car_photo.photo[0]} alt="Car" />
                </div>
                <h5 className="carTitle">
                  {car.make} {car.model}
                </h5>

                <span className="time">{car.created_at}</span>

                <div className="price_seller flex">
                  <span className="price">$12,345</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleOptions;
