import React, { useEffect } from "react";
import DashboardBox from "../../General/DashboardBox/DashboardBox";
import { Box, useMediaQuery } from "@mui/material";
// import DropDown from "../../General/DropDown/DropDown";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import "./RightCol.css";

const gridTemplateLargeScreen = `
  "left mid right"
`;

const gridTemplateSmallScreen = `
  "main"
`;

const midSectionTemplateLargeScreen = `
  "left right"
`;

const RightCol = () => {
  const isBelowMediumScreen = useMediaQuery("(max-width: 1199px)");

  let gridTemplateAreas,
    gridTemplateColumns,
    midTemplateAreas,
    midTemplateColumns;

  if (isBelowMediumScreen) {
    gridTemplateAreas = gridTemplateSmallScreen;
    gridTemplateColumns = "1fr";
    midTemplateAreas = midSectionTemplateLargeScreen;
    midTemplateColumns = "1fr 1fr";
  } else {
    gridTemplateAreas = gridTemplateLargeScreen;
    gridTemplateColumns = "2fr 2fr 1fr";
    midTemplateAreas = midSectionTemplateLargeScreen;
    midTemplateColumns = "1fr 1fr";
  }

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <DashboardBox>
        <Box
          className="secTitle"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="col-8">Search Results</span>
          {/* <span>
            <DropDown className="col-4" />
          </span> */}
        </Box>
      </DashboardBox>
      <DashboardBox>
        <Box
          height="auto"
          width="100%"
          display="grid"
          gap="1rem"
          sx={{
            gridTemplateAreas: gridTemplateAreas,
            gridTemplateColumns: gridTemplateColumns,
          }}
          className="filters"
        >
          <Box height="100%">
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
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box paddingBottom=".5rem">
              <a
                href="/"
                className="fs-4"
                style={{
                  color: "#7a63f1",
                  fontWeight: "bold",
                }}
              >
                2020 Mazda 6, Sport
              </a>
            </Box>

            <Box
              display="grid"
              columnGap="1rem"
              sx={{
                gridTemplateAreas: midTemplateAreas,
                gridTemplateColumns: midTemplateColumns,
              }}
            >
              <Box>
                <div className="flex prop">
                  <span className="propTitle text-nowrap text-nowrap">
                    Number:{" "}
                  </span>
                  <span>0-37970128</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">VIN: </span>
                  <span>JM1GL1UM4L1517115</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Milage: </span>
                  <span>0k miles (0k km)</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Location: </span>
                  <span>Bridgeport (PA)</span>
                </div>
              </Box>
              <Box>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Seller: </span>
                  <span>Usaa Guidewire</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Sale doc.: </span>
                  <span>Salvage (Delaware)</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Damage: </span>
                  <span>Other | All over</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Status: </span>
                  <span style={{ fontWeight: "bold" }}>Stationary</span>
                </div>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <div className="time">
              <CalendarTodayIcon /> Fri 9 Feb, 19:30 GMT+5
            </div>
            <div className="price1">$175</div>
            <div className="price2">Buy Now $15000</div>
            <div className="time">Fri 9 Feb, 19:30 GMT+5</div>
          </Box>
        </Box>
      </DashboardBox>
      <DashboardBox>
        <Box
          height="auto"
          width="100%"
          display="grid"
          gap="1rem"
          sx={{
            gridTemplateAreas: gridTemplateAreas,
            gridTemplateColumns: gridTemplateColumns,
          }}
          className="filters"
        >
          <Box height="100%">
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
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box paddingBottom=".5rem">
              <a
                href="/"
                className="fs-4"
                style={{
                  color: "#7a63f1",
                  fontWeight: "bold",
                }}
              >
                2020 Mazda 6, Sport
              </a>
            </Box>

            <Box
              display="grid"
              columnGap="1rem"
              sx={{
                gridTemplateAreas: midTemplateAreas,
                gridTemplateColumns: midTemplateColumns,
              }}
            >
              <Box>
                <div className="flex prop">
                  <span className="propTitle text-nowrap text-nowrap">
                    Number:{" "}
                  </span>
                  <span>0-37970128</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">VIN: </span>
                  <span>JM1GL1UM4L1517115</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Milage: </span>
                  <span>0k miles (0k km)</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Location: </span>
                  <span>Bridgeport (PA)</span>
                </div>
              </Box>
              <Box>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Seller: </span>
                  <span>Usaa Guidewire</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Sale doc.: </span>
                  <span>Salvage (Delaware)</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Damage: </span>
                  <span>Other | All over</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Status: </span>
                  <span style={{ fontWeight: "bold" }}>Stationary</span>
                </div>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <div className="time">
              <CalendarTodayIcon /> Fri 9 Feb, 19:30 GMT+5
            </div>
            <div className="price1">$175</div>
            <div className="price2">Buy Now $15000</div>
            <div className="time">Fri 9 Feb, 19:30 GMT+5</div>
          </Box>
        </Box>
      </DashboardBox>
      <DashboardBox>
        <Box
          height="auto"
          width="100%"
          display="grid"
          gap="1rem"
          sx={{
            gridTemplateAreas: gridTemplateAreas,
            gridTemplateColumns: gridTemplateColumns,
          }}
          className="filters"
        >
          <Box height="100%">
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
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box paddingBottom=".5rem">
              <a
                href="/"
                className="fs-4"
                style={{
                  color: "#7a63f1",
                  fontWeight: "bold",
                }}
              >
                2020 Mazda 6, Sport
              </a>
            </Box>

            <Box
              display="grid"
              columnGap="1rem"
              sx={{
                gridTemplateAreas: midTemplateAreas,
                gridTemplateColumns: midTemplateColumns,
              }}
            >
              <Box>
                <div className="flex prop">
                  <span className="propTitle text-nowrap text-nowrap">
                    Number:{" "}
                  </span>
                  <span>0-37970128</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">VIN: </span>
                  <span>JM1GL1UM4L1517115</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Milage: </span>
                  <span>0k miles (0k km)</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Location: </span>
                  <span>Bridgeport (PA)</span>
                </div>
              </Box>
              <Box>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Seller: </span>
                  <span>Usaa Guidewire</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Sale doc.: </span>
                  <span>Salvage (Delaware)</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Damage: </span>
                  <span>Other | All over</span>
                </div>
                <div className="flex prop">
                  <span className="propTitle text-nowrap">Status: </span>
                  <span style={{ fontWeight: "bold" }}>Stationary</span>
                </div>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <div className="time">
              <CalendarTodayIcon /> Fri 9 Feb, 19:30 GMT+5
            </div>
            <div className="price1">$175</div>
            <div className="price2">Buy Now $15000</div>
            <div className="time">Fri 9 Feb, 19:30 GMT+5</div>
          </Box>
        </Box>
      </DashboardBox>
    </div>
  );
};

export default RightCol;
