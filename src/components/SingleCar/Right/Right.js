import React, { useState } from "react";
import DashboardBox from "../../General/DashboardBox/DashboardBox";
import { Box, FormGroup } from "@mui/material";
import { TbReportSearch } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Right.css";
import { Link } from "react-router-dom";

const Right = () => {
  const [value, setValue] = useState(0);
  const [shippingTo, setShippingTo] = React.useState("");
  const [tax, setTax] = React.useState("");
  const [vat, setVAT] = React.useState("");
  const [currency, setCurrency] = React.useState("");
  const [purchaseRestriction, setPurchaseRestriction] = React.useState(false);
  const [hazardousCargo, setHazardousCargo] = React.useState(false);
  const [oversizedVehicle, setOversizedVehicle] = React.useState(false);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 500);
  };

  const handleDecrement = () => {
    setValue((prevValue) => prevValue - 500);
  };

  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <DashboardBox>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>Vehicle Reports</span>
          <Box
            className="reports"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <TbReportSearch />
            Get Reports
          </Box>
        </Box>
      </DashboardBox>

      <DashboardBox>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
              bgcolor: "rgb(230, 230, 230)",
              borderRadius: "10px",
              padding: "1rem .1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: ".2rem",
                justifyContent: "center",
                color: "#a3a3a3",
              }}
            >
              <SlCalender />
              <span>Estimated Delivery Time (EU)</span>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                fontSize: "14px",
              }}
            >
              <span>Tuesday, 2 April</span>
              <span>Tuesday, 16 April</span>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "1rem",
              border: "1px dashed #7a63f1",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            Type your maximum amount below. You will be represented by BidCars
            on live bidding. If it sells for less, you get it for less!
          </Box>
          <Box>
            <InputGroup
              className="mb-3"
              style={{
                backgroundColor: "#7a63f1",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <Button
                variant="outline-secondary"
                id="button-addon1"
                onClick={handleDecrement}
              >
                <FaMinus />
              </Button>
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                style={{ textAlign: "center" }}
                value={`$${value}`}
              />
              <Button
                variant="outline-secondary"
                id="button-addon1"
                onClick={handleIncrement}
              >
                <FaPlus />
              </Button>
            </InputGroup>
            <Box
              className="btn primaryBtn"
              sx={{
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Please login to be able to bid this vehicle
            </Box>
            <Box sx={{ color: "#7a63f1", textAlign: "center", mt: "10px" }}>
              Closes in 2d 5h 59min
            </Box>
            <hr />
          </Box>
          <Box>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              Final Price Calculator
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
                <span>Lot Price</span>
                <span>$2,625</span>
              </Box>
              <hr />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Auction Fees</span>
                <span>$588</span>
              </Box>
              <hr />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Trucking to port</span>
                <span>$390</span>
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
                    alignItems: "center",
                    gap: ".5rem",
                  }}
                >
                  <span>Shipping to</span>
                  <FormControl size="small" sx={{ minWidth: "100px" }}>
                    <InputLabel id="demo-simple-select-label">
                      Shipping To
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={shippingTo}
                      label="shippingTo"
                      onChange={(event) => setShippingTo(event.target.value)}
                    >
                      <MenuItem value={"rotterdam"}>Rotterdam, NL</MenuItem>
                      <MenuItem value={"gdynia"}>Gdynia, PL</MenuItem>
                      <MenuItem value={"bremerhaven"}>Bremerhaven, DE</MenuItem>
                      <MenuItem value={"klaipeda"}>Klaipeda, LT</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <span>$995</span>
              </Box>
              <hr />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Final Price</span>
                <span>$5,152</span>
              </Box>
              <hr />
              <Box>
                The calculator check location of the vehicle and shipment from
                one of the six ports in the USA depending on the branch
                location.
              </Box>
            </Box>
          </Box>
        </Box>
      </DashboardBox>

      <DashboardBox>
        <Box>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            Custom clearance calculator (EU only)
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
              <span>Vehicle value</span>
              <span>$2,625</span>
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
                  alignItems: "center",
                  gap: ".5rem",
                }}
              >
                <span>Tax</span>
                <FormControl size="small" sx={{ minWidth: "100px" }}>
                  <InputLabel id="demo-simple-select-label">Tax</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tax}
                    label="Tax"
                    onChange={(event) => setTax(event.target.value)}
                  >
                    <MenuItem value={10}>10% (Car)</MenuItem>
                    <MenuItem value={22}>22% (Truck)</MenuItem>
                    <MenuItem value={6}>6% (Motorcycle)</MenuItem>
                    <MenuItem value={1.7}>1.7% (Jet Ski/Boat)</MenuItem>
                    <MenuItem value={0}>0% (Classic Car))</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <span>$995</span>
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
                  alignItems: "center",
                  gap: ".5rem",
                }}
              >
                <span>VAT</span>
                <FormControl size="small" sx={{ minWidth: "100px" }}>
                  <InputLabel id="demo-simple-select-label">VAT</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={vat}
                    label="VAT"
                    onChange={(event) => setVAT(event.target.value)}
                  >
                    <MenuItem value={19}>19% (Bremehaven)</MenuItem>
                    <MenuItem value={21}>21% (Rotterdam)</MenuItem>
                    <MenuItem value={23}>23% (Gdynia)</MenuItem>
                    <MenuItem value={9}>9% (Classic Car)</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <span>$995</span>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Custom agency “All In”</span>
              <span>$2,625</span>
            </Box>
            <hr />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Custom clearance total</span>
              <span>$2,625</span>
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
                  alignItems: "center",
                  gap: ".5rem",
                }}
              >
                <span>Estimated Total Price</span>
                <FormControl size="small" sx={{ minWidth: "100px" }}>
                  <InputLabel id="demo-simple-select-label">
                    Currency
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currency}
                    label="Currency"
                    onChange={(event) => setCurrency(event.target.value)}
                  >
                    <MenuItem value={"pln"}>PLN</MenuItem>
                    <MenuItem value={"eur"}>EUR</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <span>$995</span>
            </Box>
            <hr />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <span style={{ paddingBottom: "1rem" }}>
                Custom clearance calculator is for information purposes only.
              </span>
              <span>
                Exchange rate: USD/EUR 0.9288, USD/PLN 4.0096, EUR/PLN 4.3167.
              </span>
              <span>Exchange rates updated: Feb 10, 2024, 9:00 AM.</span>
              <span>
                Rates of The National Bank of Poland <Link>nbp.pl</Link>
              </span>
            </Box>
          </Box>
        </Box>
      </DashboardBox>

      <DashboardBox>
        <Box>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            Additional Services
          </span>

          <hr />

          <Box sx={{ fontSize: "14px" }}>
            <FormGroup>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                      checked={purchaseRestriction}
                      onChange={(event) =>
                        setPurchaseRestriction(event.target.checked)
                      }
                    />
                  }
                  label="Vehicle with purchase Restriction"
                />
                <span>${purchaseRestriction ? 100 : 0}</span>
              </Box>

              <hr />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                      checked={hazardousCargo}
                      onChange={(event) =>
                        setHazardousCargo(event.target.checked)
                      }
                    />
                  }
                  label="Hazardous cargo"
                />
                <span>${hazardousCargo ? 100 : 0}</span>
              </Box>

              <hr />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                      checked={oversizedVehicle}
                      onChange={(event) =>
                        setOversizedVehicle(event.target.checked)
                      }
                    />
                  }
                  label="Oversized vehicle"
                />
                <span>${oversizedVehicle ? 100 : 0}</span>
              </Box>
            </FormGroup>
            <hr />
            <span>
              Selecting a check mark will add the given amount to the estimated
              total price.
            </span>
          </Box>
        </Box>
      </DashboardBox>
    </Box>
  );
};

export default Right;
