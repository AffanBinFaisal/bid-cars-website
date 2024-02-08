import React, { useState } from "react";
import DashboardBox from "../../General/DashboardBox/DashboardBox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const cars = [
  "Supra",
  "GTR",
  "Civic",
  "GTR",
  "Civic",
  "GTR",
  "Civic",
  "GTR",
  "Civic",
  "GTR",
  "Civic",
];

function valuetext(value) {
  return `${value}°C`;
}

const LeftCol = () => {
  const [value, setValue] = useState([0, 250000]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(250000);

  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
    setMinValue(newValue[0]);
    setMaxValue(newValue[1]);
  };

  const handleChangeInput = (event) => {
    const { id, value } = event.target;
    if (id === "minInput") {
      setMinValue(value);
      setValue([parseInt(value), maxValue]);
    } else if (id === "maxInput") {
      setMaxValue(value);
      setValue([minValue, parseInt(value)]);
    }
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
        <span className="secTitle text-center">Explore Deeper</span>
        <button className="btn primaryBtn fs-6">Current</button>
      </DashboardBox>
      <DashboardBox className="car-search">
        <span className="secTitle">Automobile</span>
        <div className="cars flex">
          {cars.map((car) => (
            <div className="car">{car}</div>
          ))}
        </div>
      </DashboardBox>
      <DashboardBox>
        <Accordion defaultExpanded sx={{ background: "#f4f4f4" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <span className="secTitle">Filters</span>
          </AccordionSummary>
          <AccordionDetails>
            <hr />
            <span className="secTitle">Odometer</span>

            <div className="slider" style={{ padding: "1rem 1rem" }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChangeSlider}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={250000}
                sx={{
                  color: "#7a63f1",
                }}
              />
            </div>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 1rem",
              }}
            >
              <TextField
                id="minInput"
                label="Min"
                variant="standard"
                className="col-5"
                size="small"
                value={minValue}
                onChange={handleChangeInput}
              />
              <TextField
                id="maxInput"
                label="Max"
                variant="standard"
                className="col-5"
                size="small"
                value={maxValue}
                onChange={handleChangeInput}
              />
            </Box>

            <hr />

            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Auction Type
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="all"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="all"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="All"
                />
                <FormControlLabel
                  value="iaai"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="IAAI"
                />
                <FormControlLabel
                  value="copart"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="Copart"
                />
              </RadioGroup>
            </FormControl>

            <hr />

            <FormGroup>
              <FormControlLabel
                value="Hide finished auctions"
                control={
                  <Checkbox
                    defaultChecked
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Hide finished auctions"
              />
              <FormControlLabel
                value="Ukryj aukcje po fazie wstępnej"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Ukryj aukcje po fazie wstępnej"
              />
              <FormControlLabel
                value="Buy now vehicles only"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Buy now vehicles only"
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            background: "#f4f4f4",
          }}
        >
          <AccordionSummary
            aria-controls="panel2-content"
            expandIcon={<ExpandMoreIcon />}
            id="panel2-header"
          >
            <span className="secTitle">Advanced Filters</span>
          </AccordionSummary>
          <AccordionDetails>
            <hr />

            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Start Code
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="all"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="all"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="All"
                />
                <FormControlLabel
                  value="vehicle starts"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="Vehicle Starts"
                />
                <FormControlLabel
                  value="run and drive"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="Run and Drive"
                />
              </RadioGroup>
            </FormControl>

            <hr />

            <FormGroup>
              <FormLabel component="legend">Body Type</FormLabel>
              <FormControlLabel
                value="sedan"
                control={
                  <Checkbox
                    defaultChecked
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Sedan"
              />
              <FormControlLabel
                value="suv"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="SUV"
              />
              <FormControlLabel
                value="pickup"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Pickup"
              />
            </FormGroup>

            <hr />

            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Drive Type
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="all"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="all"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="All"
                />
                <FormControlLabel
                  value="fwd"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="Front Wheel Drive"
                />
                <FormControlLabel
                  value="rwd"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="Rear Wheel Drive"
                />
                <FormControlLabel
                  value="awd"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="All Wheel Drive"
                />
              </RadioGroup>
            </FormControl>

            <hr />

            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Drive Type
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="all"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="all"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="All"
                />
                <FormControlLabel
                  value="auto"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="Automatic"
                />
                <FormControlLabel
                  value="manual"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="Manual"
                />
              </RadioGroup>
            </FormControl>

            <hr />

            <FormGroup>
              <FormLabel component="legend">Fuel Type</FormLabel>
              <FormControlLabel
                value="gas"
                control={
                  <Checkbox
                    defaultChecked
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Gasoline"
              />
              <FormControlLabel
                value="diesel"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Diesel"
              />
              <FormControlLabel
                value="hybrid"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Hybrid"
              />
              <FormControlLabel
                value="electric"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Electric"
              />
              <FormControlLabel
                value="other"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Other"
              />
            </FormGroup>

            <hr />

            <FormGroup>
              <FormLabel component="legend">Loss Type</FormLabel>
              <FormControlLabel
                value="fire"
                control={
                  <Checkbox
                    defaultChecked
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Fire"
              />
              <FormControlLabel
                value="water"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Water"
              />
              <FormControlLabel
                value="vandalized"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Vandalized"
              />
              <FormControlLabel
                value="rollover"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Rollover"
              />
              <FormControlLabel
                value="mechanical"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Mechanical"
              />
              <FormControlLabel
                value="biohazard/chemical"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Biohazard / Chemical"
              />
            </FormGroup>

            <hr />

            <FormGroup>
              <FormLabel component="legend">Exterior Color</FormLabel>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  value="black"
                  control={
                    <Checkbox
                      defaultChecked
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="Black"
                />
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "black",
                    border: "2px solid #434344",
                  }}
                ></div>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  value="white"
                  control={
                    <Checkbox
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="White"
                />
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    border: "2px solid #434344",
                  }}
                ></div>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  value="silver"
                  control={
                    <Checkbox
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="Silver"
                />
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "silver",
                    border: "2px solid #434344",
                  }}
                ></div>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  value="grey"
                  control={
                    <Checkbox
                      size="small"
                      sx={{
                        color: "#7a63f1",
                        "&.Mui-checked": {
                          color: "#7a63f1",
                        },
                      }}
                    />
                  }
                  label="Grey"
                />
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "grey",
                    border: "2px solid #434344",
                  }}
                ></div>
              </Box>
            </FormGroup>

            <hr />

            <FormGroup>
              <FormLabel component="legend">Cylinders</FormLabel>
              <FormControlLabel
                value="1 cyl"
                control={
                  <Checkbox
                    defaultChecked
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="1 cyl"
              />
              <FormControlLabel
                value="2 cyl"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="2 cyl"
              />
              <FormControlLabel
                value="3 cyl"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="3 cyl"
              />
              <FormControlLabel
                value="4 cyl"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="4 cyl"
              />
              <FormControlLabel
                value="5 cyl"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="5 cyl"
              />
              <FormControlLabel
                value="rotary engine"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="Rotary Engine"
              />
              <FormControlLabel
                value="other"
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#7a63f1",
                      "&.Mui-checked": {
                        color: "#7a63f1",
                      },
                    }}
                  />
                }
                label="other"
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </DashboardBox>
    </div>
  );
};

export default LeftCol;
