import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../../redux/user/userSlice";
// import { loginLogout } from "../../../redux/slice/loginSlice";
// import { registerLogout } from "../../../redux/slice/registerSlice";
// import { logoutUser } from "../../../redux/slice/logoutSlice";

const Navbar = () => {
  const [navbar, setNavbar] = useState("navbar");
  const [header, setHeader] = useState("header");
  const dispatch = useDispatch();
  const { isAuthenticated, message, loading, error, userInfo } = useSelector(
    (state) => state.user
  );
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
    dispatch(logout());
    dispatch(reset());
  };

  useEffect(() => {
    console.log(userInfo, error, message, loading, isAuthenticated);
    dispatch(reset());
  }, [dispatch, userInfo, error, message, loading, isAuthenticated]);

  return (
    <div className={header}>
      <div className="logoDiv">
        <img src="" alt="Logo" className="logo" />
      </div>
      <div className={navbar}>
        <ul className="menu">
          <li onClick={removeNavbar} className="listItem">
            <a href="/search" className="link">
              Search
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
          {userInfo && (
            <>
              <li onClick={removeNavbar} className="listItem">
                <a href="/deposit" className="link">
                  Deposit
                </a>
              </li>
              <li onClick={removeNavbar} className="listItem">
                <a href="/withdraw" className="link">
                  Withdraw
                </a>
              </li>
            </>
          )}
        </ul>

        <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>

      <div className="signUp flex">
        {userInfo ? (
          <>
            <div>Balance: {userInfo.balance}</div>
            <button className="btn primaryBtn" onClick={handleLogout}>
              Log Out
            </button>
          </>
        ) : (
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
