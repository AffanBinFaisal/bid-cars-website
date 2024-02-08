import React, { useState } from "react";
import "./Navbar.css";

import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState("navbar");
  const [header, setHeader] = useState("header");

  const showNavbar = () => {
    setNavbar("navbar showNavbar");
  };

  const removeNavbar = () => {
    setNavbar("navbar");
  };

  const addBg = () => {
    if (window.scrollY >= 20) {
      setHeader("header addBg");
    }
  };
  window.addEventListener("scroll", addBg);

  return (
    <div className={header}>
      <div className="logoDiv">
        <img src="" alt="Logo" className="logo" />
      </div>
      <div className={navbar}>
        <ul className="menu">
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Seacrh
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              My Account
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              How It Works
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Terminal Status
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              About Us
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Help
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Contact
            </a>
          </li>
        </ul>

        <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>

      <div className="signUp flex">
        <div className="text">
          <a href="/" className="link">
            Log In
          </a>
        </div>
        <div className="text">
          <a href="/" className="link">
            Sign Up
          </a>
        </div>
        <TbGridDots className="icon toggleNavbarIcon" onClick={showNavbar} />
      </div>
    </div>
  );
};

export default Navbar;
