import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import DashboardBox from "../components/General/DashboardBox/DashboardBox";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const gridTemplateLargeScreen = `
  "left right"
`;

const gridTemplateSmallScreen = `
  "main"
`;

const EditOrder = () => {
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
    <Box className="container">
      <span className="fs-1 mb-5">Edit Order</span>
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
        <DashboardBox>
          <List
            sx={{ width: "100%", maxWidth: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton>
              <ListItemText primary="General Info" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Inspection" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Shipping" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Commodity" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Images" />
            </ListItemButton>
          </List>
        </DashboardBox>
        <DashboardBox></DashboardBox>
      </Box>
    </Box>
  );
};

export default EditOrder;
