import React, { useEffect } from "react";
import "./Hero.css";
import Aos from "aos";
import "aos/dist/aos.css";
import SearchBox from "../../SearchBox/SearchBox";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="home">
      <div className="secContainer">
        <div data-aos="fade-up" className="homeText">
          <span className="homeSpan">Buying and Shipping</span>
          <h1 className="homeTitle">American Automobiles</h1>
          <p>
            With “Home Delivery” option available never been so fast and so easy
          </p>
          <div className="btns flex">
            <button data-aos="fade-right" className="btn">
              Start Bidding
            </button>
            <button data-aos="fade-left" className="btn primaryBtn">
              How It Works
            </button>
          </div>
        </div>

        {/* <div
          class="p-5 text-center bg-image rounded-3"
          style={{
            backgroundImage:
              "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
            height: "400px",
          }}
        >
          <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white">
                <h1 class="mb-3">Heading</h1>
                <h4 class="mb-3">Subheading</h4>
                <a class="btn btn-outline-light btn-lg" href="#!" role="button">
                  Call to action
                </a>
              </div>
            </div>
          </div>
        </div> */}

        <div data-aos="fade-down-right" className="homeImage">
          <img src="../../../hero.png" alt="Hero" />
          {/* <SearchBox /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
