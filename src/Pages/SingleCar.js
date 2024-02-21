import React, { useEffect, useState } from "react";
import SearchBar from "../components/General/SearchBar/SearchBar";
import { Box, useMediaQuery } from "@mui/material";
import Top from "../components/SingleCar/Top/Top";
import Below from "../components/SingleCar/Below/Below";
import Left from "../components/SingleCar/Left/Left";
import Right from "../components/SingleCar/Right/Right";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";

const lowerBoxGridTemplateSmallScreen = `
    "main"
`;

const lowerBoxGridTemplateLargeScreen = `
    "left right"
`;



const SingleCar = () => {
  const userInfo = useSelector((state) => state.login);
  const isBelowMediumScreen = useMediaQuery("(max-width: 991px)");

  let gridTemplateAreas, gridTemplateColumns;

  if (isBelowMediumScreen) {
    gridTemplateAreas = lowerBoxGridTemplateSmallScreen;
    gridTemplateColumns = "1fr";
  } else {
    gridTemplateAreas = lowerBoxGridTemplateLargeScreen;
    gridTemplateColumns = "2.7fr 1.3fr";
  }

  const { vin } = useParams();
  console.log(vin);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8001/cars/vin/${vin}`);
      const data = await response.json();
      setData(data.result);
    } catch (error) {
      console.error("Error fetching makes:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const buyNow = async () => {
    console.log(data[2].buy_now_car.purchase_price,); 
    try {
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: userInfo.user.token,
        },
      };
      const response = await axios.post(
        "http://localhost:8001/purchase/buy-now",
        {
          amount: data[2].buy_now_car.purchase_price,
          vehicle: vin,
        },
        config
      );

      console.log(response);
    } catch (error) {
      console.error("Error fetching makes:", error);
    }
  };

  return (
    <div className="container">
      <SearchBar />
      <Box
        height="100%"
        width="100%"
        padding="4rem 0"
        display="flex"
        flexDirection="column"
        gap="1rem"
      >
        <Top data={data} />
        <Below data={data} />
        <Box
          display="grid"
          gap="1rem"
          sx={{
            gridTemplateAreas: gridTemplateAreas,
            gridTemplateColumns: gridTemplateColumns,
          }}
          className="filters"
        >
          <Left data={data} />
          <Right data={data} />
        </Box>
      </Box>
      <button onClick={buyNow}>Buy Now</button>
    </div>
  );
};

export default SingleCar;
