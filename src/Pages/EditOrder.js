import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import DashboardBox from "../components/General/DashboardBox/DashboardBox";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import GeneralInfo from "../components/Admin/GeneralInfo";
import Inspection from "../components/Admin/Inspection";
import Shipping from "../components/Admin/Shipping";
import Commodiy from "../components/Admin/Commodiy";
import Images from "../components/Admin/Images/Images";

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

  const [activeSection, setActiveSection] = useState("General Info");

  return (
    <Box className="container">
      <span className="fs-1">Edit Order</span>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <DashboardBox>
            <List
              sx={{ width: "100%" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton
                onClick={() => setActiveSection("General Info")}
                sx={{
                  backgroundColor:
                    activeSection === "General Info"
                      ? "#7a63f1"
                      : "transparent",
                  color: activeSection === "General Info" ? "white" : "black",
                  borderRadius: "10px",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <ListItemText primary="General Info" />
              </ListItemButton>
              <ListItemButton
                onClick={() => setActiveSection("Inspection")}
                sx={{
                  backgroundColor:
                    activeSection === "Inspection" ? "#7a63f1" : "transparent",
                  color: activeSection === "Inspection" ? "white" : "black",
                  borderRadius: "10px",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <ListItemText primary="Inspection" />
              </ListItemButton>
              <ListItemButton
                onClick={() => setActiveSection("Shipping")}
                sx={{
                  backgroundColor:
                    activeSection === "Shipping" ? "#7a63f1" : "transparent",
                  color: activeSection === "Shipping" ? "white" : "black",
                  borderRadius: "10px",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <ListItemText primary="Shipping" />
              </ListItemButton>
              <ListItemButton
                onClick={() => setActiveSection("Commodity")}
                sx={{
                  backgroundColor:
                    activeSection === "Commodity" ? "#7a63f1" : "transparent",
                  color: activeSection === "Commodity" ? "white" : "black",
                  borderRadius: "10px",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <ListItemText primary="Commodity" />
              </ListItemButton>
              <ListItemButton
                onClick={() => setActiveSection("Images")}
                sx={{
                  backgroundColor:
                    activeSection === "Images" ? "#7a63f1" : "transparent",
                  color: activeSection === "Images" ? "white" : "black",
                  borderRadius: "10px",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <ListItemText primary="Images" />
              </ListItemButton>
            </List>
          </DashboardBox>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <DashboardBox>
            {activeSection === "General Info" && <GeneralInfo />}
            {activeSection === "Inspection" && <Inspection />}
            {activeSection === "Shipping" && <Shipping />}
            {activeSection === "Commodity" && <Commodiy />}
            {activeSection === "Images" && <Images />}
          </DashboardBox>
        </div>
      </Box>
    </Box>
  );
};

export default EditOrder;
