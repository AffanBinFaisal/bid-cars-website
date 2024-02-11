import React, { useState } from "react";
import DashboardBox from "../../General/DashboardBox/DashboardBox";
import { Box } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import "./Left.css";

const Left = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <DashboardBox>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <Carousel.Item>
            <img
              src="../../../logo.svg"
              alt="First Slide"
              className="homeImage"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../../hero.png" alt="First Slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../../hero.png" alt="First Slide" />
          </Carousel.Item>
        </Carousel>
      </DashboardBox>
      <DashboardBox>
        <Box>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            Condition Details
          </span>
          <hr />
          <Box sx={{ fontSize: "14px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className="propTitle">Loss</span>
              <span>-</span>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className="propTitle">Primary damage</span>
              <span>Normal wear</span>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className="propTitle">Secondary damage</span>
              <span>-</span>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className="propTitle">Odometer</span>
              <span>42,427 mi (68,280 km)</span>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className="propTitle">Start code</span>
              <span>Run and Drive</span>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className="propTitle">Airbag Checked</span>
              <span>-</span>
            </Box>
          </Box>
        </Box>
      </DashboardBox>
      <DashboardBox>
        <Box>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            Vehicle Details
          </span>
          <hr />
          <Box sx={{ fontSize: "14px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className="propTitle">VIN</span>
              <span>WDBBA45A2DB028566</span>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className="propTitle">Short info</span>
              <span>3.8L 8 * HP * RWD * Automatic</span>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className="propTitle">Model</span>
              <span>Sl-class</span>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className="propTitle">Body Style</span>
              <span>Roadster</span>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className="propTitle">Engine</span>
              <span>3.8L 8</span>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className="propTitle">Drive</span>
              <span>Rear wheel drive</span>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className="propTitle">Transmission</span>
              <span>Automatic</span>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span className="propTitle">Sale Status</span>
              <span>On minimum bid</span>
            </Box>
          </Box>
        </Box>
      </DashboardBox>
      <DashboardBox>
        <Box>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            Additional Information
          </span>
          <hr />
          <Box sx={{ fontSize: "14px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <span className="propTitle">From</span>
                <span>Albany (NY)</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <span className="propTitle">To</span>
                <span>Newark (NJ)</span>
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
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <span className="propTitle">Date</span>
                <span>Monday, February 12, 2024</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <span className="propTitle">Seller</span>
                <span>No information</span>
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
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <span className="propTitle">Sale Document</span>
                <span>CT</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <span className="propTitle">Document Notes</span>
                <span>---</span>
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
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <span className="propTitle">ACV</span>
                <span>$38,000</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <span className="propTitle">ERC</span>
                <span>$0</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </DashboardBox>
    </Box>
  );
};

export default Left;
