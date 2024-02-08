import React from "react";
import DashboardBox from "../../General/DashboardBox/DashboardBox";
import { Box } from "@mui/material";

const Below = () => {
  return (
    <DashboardBox>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <span
            className="fs-5"
            style={{
              color: "#7a63f1",
            }}
          >
            2020 Hyundai Tucson, SE
          </span>
          <span
            style={{
              backgroundColor: "red",
              padding: ".2rem .4rem",
              color: "white",
              borderRadius: "5px",
            }}
          >
            IAAI
          </span>
          <span
            style={{
              border: "1px solid grey",
              padding: ".5rem",
              borderRadius: "10px",
            }}
          >
            Live Auction | Tue 19:30
          </span>
        </Box>
        <Box>
          <span
            style={{
              backgroundColor: "rgb(230, 230, 230)",
              padding: ".5rem",
              borderRadius: "10px",
            }}
          >
            Current Bid: $0
          </span>
        </Box>
      </Box>

      <Box></Box>
    </DashboardBox>
  );
};

export default Below;
