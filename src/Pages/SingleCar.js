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
import { HashLoader } from "react-spinners";

const lowerBoxGridTemplateSmallScreen = `
    "main"
`;

const lowerBoxGridTemplateLargeScreen = `
    "left right"
`;

const SingleCar = () => {
  const { userInfo } = useSelector((state) => state.user);
  console.log(userInfo);
  const isBelowMediumScreen = useMediaQuery("(max-width: 991px)");
  const [loading, setLoading] = useState(false);

  let gridTemplateAreas, gridTemplateColumns;

  if (isBelowMediumScreen) {
    gridTemplateAreas = lowerBoxGridTemplateSmallScreen;
    gridTemplateColumns = "1fr";
  } else {
    gridTemplateAreas = lowerBoxGridTemplateLargeScreen;
    gridTemplateColumns = "2.7fr 1.3fr";
  }

  const { vin } = useParams();

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      console.log("data fetching");
      const response = await fetch(`http://localhost:8001/cars/vin/${vin}`);
      const data = await response.json();
      console.log(data.result[0]);
      setData(data.result[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching makes:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [vin]);

  // console.log(data);

  const buyNow = async () => {
    // console.log(data[2].buy_now_car.purchase_price);
    try {
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: userInfo.token,
        },
      };
      const response = await axios.post(
        "http://localhost:8001/purchase/buy-now",
        {
          amount: data ? data[2].buy_now_car.purchase_price : null,
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
        {loading ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <HashLoader color="#7a63f1" size={50} />
          </Box>
        ) : (
          <>
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
          </>
        )}
      </Box>
      <button onClick={buyNow}>Buy Now</button>
    </div>
  );
};

export default SingleCar;
