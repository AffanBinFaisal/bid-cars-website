/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import DropDown from "../DropDown/DropDown";
import { AiOutlineSearch } from "react-icons/ai";
import Switch from "@mui/material/Switch";
import Aos from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchModels,
  searchChanged,
  emptySearch,
} from "../../../redux/slice/searchSlice";
import { fetchResults } from "../../../redux/slice/resultsSlice";
import { Box, TextField } from "@mui/material";

const SearchBar = () => {
  const { auctionName, yearFrom, yearTo, make, model } = useSelector(
    (state) => state.search
  );
  const models = useSelector((state) => state.search.models);
  const dispatch = useDispatch();
  // const [search, setSearch] = React.useState({
  //   type: "",
  //   yearFrom: "",
  //   yearTo: "",
  //   make: "",
  //   model: "",
  // });

  const carMakes = [
    "Acura",
    "Alfa Romeo",
    "American Motors",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Daewoo",
    "Daihatsu",
    "Datsun",
    "Dodge",
    "Eagle",
    "Ferrari",
    "Fiat",
    "Fisker",
    "Ford",
    "Genesis",
    "GEO",
    "GMC",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Jaguar",
    "Jeep",
    "KIA",
    "Lamborghini",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Lotus",
    "Maserati",
    "Mazda",
    "Mclaren",
    "Mercedes-Benz",
    "Mercury",
    "Mini",
    "Mitsubishi",
    "Nissan",
    "Oldsmobile",
    "Plymouth",
    "Pontiac",
    "Porsche",
    "RAM",
    "Renault",
    "Rolls-Royce",
    "Saab",
    "Saturn",
    "Scion",
    "Smart",
    "Studebaker",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Triumph",
    "Volkswagen",
    "Volvo",
    "Jens",
    "MGB",
    "Packard",
    "Polestar",
    "VPG",
    "Willys",
    "Other",
  ];

  // const vehicleTypes = [
  //   "Automobile",
  //   "Motorcycle",
  //   "ATV",
  //   "Personal Watercraft",
  //   "Snowmobile",
  //   "Boat",
  //   "Trailer",
  //   "Travel Trailer",
  //   "Motor Home",
  //   "Emergency Equipment",
  //   "Heavy Equipment",
  //   "Farm Equipment",
  //   "Forestry Equipment",
  //   "Bus",
  //   "Truck",
  // ];

  const auctionNames = ["IAAI", "Copart"];

  const years = [];
  for (let year = 1950; year <= 2025; year++) {
    years.push(year);
  }

  const [makes, setMakes] = useState(carMakes);
  const [allMakes, setAllMakes] = useState(carMakes);
  const [vinNumber, setVinNumber] = useState("");
  const [searchByVinNumber, setSearchByVinNumber] = useState(false);
  // const [models, setModels] = useState([]);
  const navigate = useNavigate();

  const fetchMakes = async () => {
    try {
      const response = await fetch("http://localhost:8001/cars/get-makes");
      const data = await response.json();
      setAllMakes(data.result);
    } catch (error) {
      console.error("Error fetching makes:", error);
    }
  };

  // const fetchVehicleTypes = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8001/cars/get-vehicles-type"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error fetching makes:", error);
  //   }
  // };

  // const fetchModels = async (id) => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:8001/cars/get-model-by-make/${id}`
  //     );
  //     const data = await response.json();
  //     const modelsList = data.result.slice(0, 10).map((model) => model.model);
  //     setModels(modelsList);
  //   } catch (error) {
  //     console.error("Error fetching makes:", error);
  //   }
  // };

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
    fetchMakes();
    // fetchVehicleTypes();
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    // setSearch({
    //   ...search,
    //   [event.target.name]: event.target.value,
    // });
    const { name, value } = event.target;
    const payload = { [name]: value };
    dispatch(searchChanged(payload));
    if (event.target.name == "make") {
      try {
        // Dispatch the fetchModels thunk with the selected make ID
        const model = allMakes.find(
          (obj) => obj.make === event.target.value.toUpperCase()
        );
        const id = model.id;
        dispatch(fetchModels(id));
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    }
  };

  console.log({ auctionName, yearFrom, yearTo, make, model });

  const handleSwitchChange = (event) => {
    setSearchByVinNumber(event.target.checked);
  };

  const handleVinSearch = () => {
    navigate(`/lot/${vinNumber}`);
    dispatch(emptySearch());
  };

  const navigateToResults = () => {
    // navigate("/search/results", { state: search });
    dispatch(fetchResults({ auctionName, yearFrom, yearTo, make, model }));
    navigate("/search/results");
  };

  return (
    <div className="search">
      <div className="secContainer container">
        <h3 data-aos="fade-up" className="title">
          Which vehicle are you looking for?
        </h3>

        <Box alignItems="center" data-aos="fade-up">
          <span>Search by Features</span>
          <Switch
            checked={searchByVinNumber}
            onChange={handleSwitchChange}
            inputProps={{ "aria-label": "search by features switch" }}
            color="default"
            sx={{
              "& .MuiSwitch-thumb": {
                color: "#7a63f1",
              },
            }}
          />
          <span>Search by VIN Number</span>
        </Box>

        {!searchByVinNumber && (
          <div className="searchDiv grid" data-aos="fade-up">
            <DropDown
              className="input"
              placeholder="Auction Name"
              onChange={handleChange}
              value={auctionName}
              name="auctionName"
              options={auctionNames}
            />
            <DropDown
              className="input"
              placeholder="From"
              onChange={handleChange}
              value={yearFrom}
              name="yearFrom"
              options={years}
            />
            <DropDown
              className="input"
              placeholder="To"
              onChange={handleChange}
              value={yearTo}
              name="yearTo"
              options={years}
            />
            <DropDown
              className="input"
              placeholder="Make"
              onChange={handleChange}
              value={make}
              name="make"
              options={makes}
            />
            <DropDown
              className="input"
              placeholder="Model"
              onChange={handleChange}
              value={model}
              name="model"
              options={models}
            />
            <button className="btn primaryBtn flex" onClick={navigateToResults}>
              <AiOutlineSearch className="icon" />
              <span>Search</span>
            </button>
          </div>
        )}

        {searchByVinNumber && (
          <Box className="vinDiv grid" data-aos="fade-up">
            <TextField
              id="standard-basic"
              label="Vin Number"
              variant="standard"
              className="input"
              value={vinNumber}
              onChange={(event) => setVinNumber(event.target.value)}
            />
            <button
              className="btn primaryBtn flex"
              onClick={() => handleVinSearch(vinNumber)}
            >
              <AiOutlineSearch className="icon" />
              <span>Search</span>
            </button>
          </Box>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
