import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import DropDown from "../DropDown/DropDown";
import { AiOutlineSearch } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";


import { useNavigate , useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = React.useState({
    type: "",
    yearFrom: "",
    yearTo: "",
    make: "",
    model: ""
  });

  console.log(search);

  const carMakes = [
    "All makes",
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

  const [makes, setMakes] = useState(carMakes);
  const [allMakes, setAllMakes] = useState(carMakes);
  const [models, setModels] = useState([]);
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

  const fetchModels = async (id) => {
    try {
      const response = await fetch(`http://localhost:8001/cars/get-model-by-make/${id}`);
      const data = await response.json();
      const modelsList = data.result.slice(0, 10).map((model) => model.model)
      setModels(modelsList);
    } catch (error) {
      console.error("Error fetching makes:", error);
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
    fetchMakes();
  }, []);


  const handleChange = (event) => {
    event.preventDefault();
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
    if (event.target.name == "make") {
      const model = allMakes.find(obj => obj.make == event.target.value.toUpperCase());
      console.log(model);
      const id = model.id;
      fetchModels(id);
    }
  }

  const navigateToResults = () => {
    navigate("/search/results", { state: search });
  }

  return (
    <div className="search">
      <div className="secContainer container">
        <h3 data-aos="fade-up" className="title">
          Which vehicle are you looking for?
        </h3>

        <div className="searchDiv grid">
          <DropDown className="input" placeholder="Type" onChange={handleChange} value={search.type} name="type" />
          <DropDown className="input" placeholder="From" onChange={handleChange} value={search.yearFrom} name="yearFrom" />
          <DropDown className="input" placeholder="To" onChange={handleChange} value={search.yearTo} name="yearTo" />
          <DropDown className="input" placeholder="Make" onChange={handleChange} value={search.make} name="make" options={makes} />
          <DropDown className="input" placeholder="Model" onChange={handleChange} value={search.model} name="model" options={models} />
          <button className="btn primaryBtn flex" onClick={navigateToResults}>
            <AiOutlineSearch className="icon" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
