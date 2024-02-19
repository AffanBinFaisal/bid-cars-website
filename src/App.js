import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Import your page components
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import HowItWorks from "./Pages/HowItWorks";
import Help from "./Pages/Help";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NoPage from "./Pages/NoPage";
import SignUp from "./Pages/SignUp";
import SearchCurrent from "./Pages/SearchCurrent";
import CurrentResults from "./Pages/CurrentResults";
import SearchArchived from "./Pages/SearchArchived";
import ArchivedResults from "./Pages/ArchivedResults";
import Status from "./Pages/Status";
import CurrentBids from "./Pages/CurrentBids";
import LostBids from "./Pages/LostBids";
import WonBids from "./Pages/WonBids";
import Transports from "./Pages/Transports";
import BiddingPower from "./Pages/BiddingPower";
import DepositRefund from "./Pages/DepositRefund";
import PersonalInformation from "./Pages/PersonalInformation";
import Watchlist from "./Pages/Watchlist";
import WatchlistArchived from "./Pages/WatchlistArchived";
import Shipping from "./Pages/Shipping";
import EmailPassword from "./Pages/EmailPassword";
import Layout from "./Layout/Layout";
import SingleCar from "./Pages/SingleCar";
import Verify from "./Pages/Verify";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="verify" element={<Verify />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password/:token" element={<ResetPassword />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="help" element={<Help />} />
        <Route path="status" element={<Status />} />
        <Route path="transports" element={<Transports />} />
        <Route path="search" element={<SearchCurrent />} />
        <Route path="search/results" element={<CurrentResults />} />
        <Route path="search/archived" element={<SearchArchived />} />
        <Route path="search/archived/results" element={<ArchivedResults />} />
        {/* yet to insert car param */}
        <Route path="lot/:make/:model/:vin" element={<SingleCar />} />{" "}
        <Route path="user/increase-power" element={<BiddingPower />} />
        <Route path="user/deposit" element={<DepositRefund />} />
        <Route
          path="user/personal-information"
          element={<PersonalInformation />}
        />
        <Route path="user/email-password" element={<EmailPassword />} />
        <Route path="user/watchlist" element={<Watchlist />} />
        <Route path="user/watchlist/archived" element={<WatchlistArchived />} />
        <Route path="user/shipping" element={<Shipping />} />
        <Route path="user/bids/current" element={<CurrentBids />} />
        <Route path="user/bids/won" element={<WonBids />} />
        <Route path="user/bids/lost" element={<LostBids />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
