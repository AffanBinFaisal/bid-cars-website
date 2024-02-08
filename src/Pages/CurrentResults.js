import React from "react";
import SearchBar from "../components/General/SearchBar/SearchBar";
import { Box, useMediaQuery } from "@mui/material";
import LeftCol from "../components/Results/LeftCol/LeftCol";
import RightCol from "../components/Results/RightCol/RightCol";

const gridTemplateLargeScreen = `
  "left right"
`;

const gridTemplateSmallScreen = `
  "main"
`;

const CurrentResults = () => {
  const isBelowMediumScreen = useMediaQuery("(max-width: 991px)");

  let gridTemplateAreas, gridTemplateColumns;

  if (isBelowMediumScreen) {
    gridTemplateAreas = gridTemplateSmallScreen;
    gridTemplateColumns = "1fr";
  } else {
    gridTemplateAreas = gridTemplateLargeScreen;
    gridTemplateColumns = "1fr 3fr";
  }

  return (
    <div className="container">
      <SearchBar />
      <Box
        height="100%"
        width="100%"
        display="grid"
        padding="4rem 0"
        gap="1rem"
        sx={{
          gridTemplateAreas: gridTemplateAreas,
          gridTemplateColumns: gridTemplateColumns,
        }}
        className="filters
        "
      >
        <LeftCol />
        <RightCol />
      </Box>
    </div>
  );
};

export default CurrentResults;
