import React, { useState } from "react";
import DashboardBox from "../../General/DashboardBox/DashboardBox";
import { Box } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import "./Left.css";

const Left = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {props.data && (
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
              {props.data.car_photo &&
                props.data.car_photo.photo.map((photo) => (
                  <Carousel.Item>
                    <img src={photo} alt="First Slide" className="homeImage" />
                  </Carousel.Item>
                ))}
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
                  <span>NO DATA FROM API</span>
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
                  <span>{props.data.primary_damage}</span>
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
                  <span>{props.data.secondary_damage}</span>
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
                  <span>
                    {`${props.data.odometer} mi (${Math.round(
                      props.data.odometer * 1.609
                    )} kms)`}
                  </span>
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
                  <span>{props.data.highlights}</span>
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
                  <span>NO DATA FROM API</span>
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
                  <span>{props.data.vin}</span>
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
                  <span>{props.data.engine_type}</span>
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
                  <span>{props.data.model}</span>
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
                  <span>{props.data.body_style}</span>
                </Box>
                <hr />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span className="propTitle">Cylinders</span>
                  <span>{props.data.cylinders}</span>
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
                  <span>{props.data.drive}</span>
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
                  <span>{props.data.transmission}</span>
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
                  <span>NO DATA FROM API</span>
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
                    <span>{props.data.created_at}</span>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <span className="propTitle">Seller</span>
                    <span>{props.data.seller}</span>
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
                    <span>{props.data.doc_type}</span>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <span className="propTitle">Document Notes</span>
                    <span>NO DATA FROM API</span>
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
                    <span>NO DATA FROM API</span>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <span className="propTitle">ERC</span>
                    <span>NO DATA FROM API</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </DashboardBox>
        </Box>
      )}
    </>
  );
};

export default Left;
