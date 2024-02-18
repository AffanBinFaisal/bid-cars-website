import React, { useState } from "react";
import "./Navbar.css";

import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { loginLogout } from "../../../redux/slice/loginSlice";
import { registerLogout } from "../../../redux/slice/registerSlice";
import { logoutUser } from "../../../redux/slice/logoutSlice";

const Navbar = () => {
  const [navbar, setNavbar] = useState("navbar");
  const [header, setHeader] = useState("header");
  const { isAuthenticated, message, loading, error, user } = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();

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

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(loginLogout());
    dispatch(registerLogout());
  };

  return (
    <div className={header}>
      <div className="logoDiv">
        <img src="" alt="Logo" className="logo" />
      </div>
      <div className={navbar}>
        <ul className="menu">
          <li onClick={removeNavbar} className="listItem">
            <a href="/search" className="link">
              Seacrh
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/user/watchlist" className="link">
              My Account
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/how-it-works" className="link">
              How It Works
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/status" className="link">
              Terminal Status
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/about-us" className="link">
              About Us
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/help" className="link">
              Help
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/contact" className="link">
              Contact
            </a>
          </li>
        </ul>

        <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>

      <div className="signUp flex">
        {isAuthenticated && (
          <button className="btn primaryBtn" onClick={handleLogout}>
            Log Out
          </button>
        )}
        {!isAuthenticated && (
          <>
            <div className="text">
              <a href="/login" className="link">
                Log In
              </a>
            </div>
            <div className="text">
              <a href="/signup" className="link">
                Sign Up
              </a>
            </div>
          </>
        )}
        <TbGridDots className="icon toggleNavbarIcon" onClick={showNavbar} />
      </div>
    </div>
  );
};

export default Navbar;
