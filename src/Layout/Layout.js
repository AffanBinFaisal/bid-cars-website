import React from "react";
import Navbar from "../components/General/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Destinations from "../components/General/Destinations/Destinations";
import Footer from "../components/General/Footer/Footer";
import PopularMakes from "../components/General/PopularMakes/PopularMakes";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <PopularMakes />
      <Destinations />
      <Footer />
    </main>
  );
};

export default Layout;
