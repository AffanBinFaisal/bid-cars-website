import React from "react";
import SearchBar from "../components/General/SearchBar/SearchBar";
import { Box, useMediaQuery } from "@mui/material";
import SearchCol from "../components/Search/SearchCol/SearchCol";

const gridTemplateSmallScreen = `
    "main"
`;

const gridTemplateMediumScreen = `
    "left right"
`;

const gridTemplateLargeScreen = `
    "left mid right"
`;

const SearchCurrent = () => {
  const isBelowMediumScreen = useMediaQuery("(max-width: 767px)");
  const isAboveMediumScreen = useMediaQuery("(min-width: 992px)");

  let gridTemplateAreas, gridTemplateColumns;

  if (isBelowMediumScreen) {
    gridTemplateAreas = gridTemplateSmallScreen;
    gridTemplateColumns = "1fr";
  } else if (isAboveMediumScreen) {
    gridTemplateAreas = gridTemplateLargeScreen;
    gridTemplateColumns = "repeat(3, 1fr)";
  } else {
    gridTemplateAreas = gridTemplateMediumScreen;
    gridTemplateColumns = "repeat(2, 1fr)";
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
        className="filters"
      >
        <SearchCol title="Automobile" />
        <SearchCol title="Snowmobile" />
        <SearchCol title="Loru" />
      </Box>
    </div>
  );
};

export default SearchCurrent;
