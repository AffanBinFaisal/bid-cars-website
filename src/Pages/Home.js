// Home.js
import React, { useEffect, useState } from "react";
import Hero from "../components/HomePage/Hero/Hero";
import VehicleOptions from "../components/HomePage/VehicleOptions/VehicleOptions";
import SearchBar from "../components/General/SearchBar/SearchBar";
import axios from "axios";

const Home = () => {
  const [BMWcars, setBMWCars] = useState([]);
  const [Audicars, setAudiCars] = useState([]);
  const [ToyotaCars, setToyotaCars] = useState([]);

  const fetchBMWCars = async () => {
    const response = await axios.get("http://localhost:8001/cars", {
      params: {
        auctionName: "",
        yearFrom: "",
        yearTo: "",
        make: "BMW",
        model: "",
      },
    });
    const data = response.data;
    setBMWCars(data.result.slice(0, 3));
  };

  const fetchAudiCars = async () => {
    const response = await axios.get("http://localhost:8001/cars", {
      params: {
        auctionName: "",
        yearFrom: "",
        yearTo: "",
        make: "Audi",
        model: "",
      },
    });
    const data = response.data;
    setAudiCars(data.result.slice(0, 3));
  };

  const fetchToyotaCars = async () => {
    const response = await axios.get("http://localhost:8001/cars", {
      params: {
        auctionName: "",
        yearFrom: "",
        yearTo: "",
        make: "Toyota",
        model: "",
      },
    });
    const data = response.data;
    setToyotaCars(data.result.slice(0, 3));
  };

  useEffect(() => {
    fetchBMWCars();
    fetchAudiCars();
    fetchToyotaCars();
  }, []);

  return (
    <div>
      <Hero />
      <SearchBar />
      {BMWcars && <VehicleOptions type="BMW" cars={BMWcars} />}
      {Audicars && <VehicleOptions type="Audi" cars={Audicars} />}
      {ToyotaCars && <VehicleOptions type="Toyota" cars={ToyotaCars} />}
    </div>
  );
};

export default Home;
