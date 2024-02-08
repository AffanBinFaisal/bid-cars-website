// Home.js
import React from "react";
import Hero from "../components/HomePage/Hero/Hero";
import VehicleOptions from "../components/HomePage/VehicleOptions/VehicleOptions";
import SearchBar from "../components/General/SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <VehicleOptions type="American Classic Cars" quantity="120123" />
      <VehicleOptions type="Motorcycle Harley Davidson" quantity="120123" />
      <VehicleOptions type="Supercars" quantity="120123" />
      <VehicleOptions type="Auction Monday" quantity="120123" />
      <VehicleOptions type="Buy Now Inventory" quantity="120123" />
    </div>
  );
};

export default Home;
