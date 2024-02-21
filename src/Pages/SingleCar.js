import React, { useEffect, useState } from "react";
import SearchBar from "../components/General/SearchBar/SearchBar";
import { Box, useMediaQuery } from "@mui/material";
import Top from "../components/SingleCar/Top/Top";
import Below from "../components/SingleCar/Below/Below";
import Left from "../components/SingleCar/Left/Left";
import Right from "../components/SingleCar/Right/Right";
import { useParams } from "react-router";

const lowerBoxGridTemplateSmallScreen = `
    "main"
`;

const lowerBoxGridTemplateLargeScreen = `
    "left right"
`;

const SingleCar = () => {
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

  console.log(data);

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
    </div>
  );
};

export default SingleCar;
