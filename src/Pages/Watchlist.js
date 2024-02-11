import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import SearchBar from "../components/General/SearchBar/SearchBar";
import Left from "../components/Watchlist/Left/Left";
import Right from "../components/Watchlist/Right/Right";

const gridTemplateLargeScreen = `
  "left right"
`;

const gridTemplateSmallScreen = `
  "main"
`;

const Watchlist = () => {
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
    <>
      <Box className="container">
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
        >
          <Left />
          <Right />
        </Box>
      </Box>
    </>
  );
};

export default Watchlist;
