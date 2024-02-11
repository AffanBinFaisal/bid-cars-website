import { Box } from "@mui/material";
import React, { useState } from "react";
import DashboardBox from "../../General/DashboardBox/DashboardBox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Left.css";
import { Link } from "react-router-dom";

const Left = () => {
  const [activePage, setActivePage] = useState("watchlist");

  const handleButtonClick = (page) => {
    setActivePage(page);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <DashboardBox>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            textAlign: "center",
            gap: "1rem",
          }}
        >
          <Box
            className={`watchlistBtn ${
              activePage === "watchlist" ? "activeBtn" : ""
            }`}
            onClick={() => handleButtonClick("watchlist")}
          >
            Watchlist (5)
          </Box>
          <Box
            className={`watchlistBtn ${
              activePage === "archived" ? "activeBtn" : ""
            }`}
            onClick={() => handleButtonClick("archived")}
          >
            Archived
          </Box>
        </Box>
      </DashboardBox>
      <DashboardBox>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span className="secTitle">Bidding power</span>
            <button className="btn primaryBtn">Deposit Fund</button>
          </Box>
          <hr />
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "14px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span className="propTitle">Available Power</span>
                <span>$21,200</span>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <span className="propTitle">Total Power</span>
                  <span>$50,000</span>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span className="propTitle">Active Bids</span>
                <span>4</span>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <span className="propTitle">Bids Limit</span>
                  <span>10</span>
                </Box>
              </Box>
            </Box>
          </Box>
          <hr />
          <Box className="btn primaryBtn">Increase Bidding Power</Box>
        </Box>
      </DashboardBox>
      <DashboardBox>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <span className="secTitle">My Auctions</span>
          <hr />
          <Accordion defaultExpanded sx={{ background: "#f4f4f4" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <span className="secTitle">Bids</span>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Link>Current Bids</Link>
                <Link>Won Bids</Link>
                <Link>Lost Bids</Link>
              </Box>
            </AccordionDetails>
          </Accordion>
          <hr />
          Shipping
        </Box>
      </DashboardBox>
    </Box>
  );
};

export default Left;
