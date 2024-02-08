import React, { useEffect } from "react";
import "./SearchBar.css";
import DropDown from "../DropDown/DropDown";
import { AiOutlineSearch } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const SearchBar = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="search">
      <div className="secContainer container">
        <h3 data-aos="fade-up" className="title">
          Which vehicle are you looking for?
        </h3>

        <div className="searchDiv grid">
          <DropDown className="input" placeholder="Type" />
          <DropDown className="input" placeholder="From" />
          <DropDown className="input" placeholder="To" />
          <DropDown className="input" placeholder="Make" />
          <DropDown className="input" placeholder="Models" />
          <button className="btn primaryBtn flex">
            <AiOutlineSearch className="icon" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
