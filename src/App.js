import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import ArchivedSearch from "./Pages/ArchivedSearch";
import HowItWorks from "./Pages/HowItWorks";
import Status from "./Pages/Status";
import AboutUs from "./Pages/AboutUs";
import Help from "./Pages/Help";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/search/archived" element={<ArchivedSearch />}></Route>
          <Route path="/how-it-works" element={<HowItWorks />}></Route>
          <Route path="/status" element={<Status />}></Route>
          <Route
              path="/about-us"
              element={<AboutUs />}
            ></Route>
          <Route
              path="/help"
              element={<Help />}
            ></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
