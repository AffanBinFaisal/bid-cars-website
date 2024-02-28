import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Import your page components
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/SignUp";
import SearchCurrent from "./pages/SearchCurrent";
import CurrentResults from "./pages/CurrentResults";
import SearchArchived from "./pages/SearchArchived";
import ArchivedResults from "./pages/ArchivedResults";
import Status from "./pages/Status";
import CurrentBids from "./pages/CurrentBids";
import LostBids from "./pages/LostBids";
import WonBids from "./pages/WonBids";
import Transports from "./pages/Transports";
import BiddingPower from "./pages/BiddingPower";
import DepositRefund from "./pages/DepositRefund";
import PersonalInformation from "./pages/PersonalInformation";
import Watchlist from "./pages/Watchlist";
import WatchlistArchived from "./pages/WatchlistArchived";
import Shipping from "./pages/Shipping";
import EmailPassword from "./pages/EmailPassword";
import Layout from "./layout/Layout";
import SingleCar from "./pages/SingleCar";
import Verify from "./pages/Verify";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Verified from "./pages/Verified";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Success from "./pages/Success";
import AdminLayout from "./layout/AdminLayout";
import Orders from "./pages/Admin/Orders";
import Bids from "./pages/Admin/Bids";
import EditOrder from "./pages/EditOrder";
import SuccessfullPayment from "./pages/SuccessfullPayment";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="verify" element={<Verify />} />
      <Route path="verified/:token" element={<Verified />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password/:token" element={<ResetPassword />} />
      <Route path="deposit" element={<Deposit />} />
      <Route
        path=":email/transaction/successful"
        element={<SuccessfullPayment />}
      />
      <Route path="withdraw" element={<Withdraw />} />
      <Route path="success/:email" element={<Success />} />
      <Route path="/admin/" element={<AdminLayout />}>
        <Route index element={<Orders />} />
        <Route path="orders/edit" element={<EditOrder />} />
        <Route path="bids" element={<Bids />} />
      </Route>
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
        <Route path="lot/:make?/:model?/:vin" element={<SingleCar />} />{" "}
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
