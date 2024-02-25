import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Box, TextField } from "@mui/material";

const GeneralInfo = () => {
  const [inputs, setInputs] = useState({
    orderNumber: "",
    customer: "",
    auctionFee: "",
    terminal: "",
    originDate: "",
    carValue: "",
    auction: "",
    destination: "",
  });

  return (
    <Box>
      <span className="fs-2 ">General Info</span>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          columnGap: "2rem",
          rowGap: "1rem",
        }}
      >
        <TextField
          label="Order Number"
          id="filled-size-small"
          variant="standard"
          size="small"
          required
          name="orderNumber"
          onChange={(ev) =>
            setInputs({ ...inputs, [ev.target.name]: ev.target.value })
          }
          value={inputs.orderNumber}
        />
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label" required>
            Customer
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={inputs.customer}
            name="customer"
            onChange={(ev) =>
              setInputs({ ...inputs, [ev.target.name]: ev.target.value })
            }
            label="Customer"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Auction Fee
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={inputs.auctionFee}
            onChange={(ev) =>
              setInputs({ ...inputs, [ev.target.name]: ev.target.value })
            }
            name="auctionFee"
            label="Auction Fee"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Terminal
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={inputs.terminal}
            name="terminal"
            onChange={(ev) =>
              setInputs({ ...inputs, [ev.target.name]: ev.target.value })
            }
            label="Terminal"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem label="Origin Date">
            <DesktopDatePicker
              defaultValue={dayjs("2022-04-17")}
              value={inputs.originDate}
              onChange={(newValue) =>
                setInputs({
                  ...inputs,
                  originDate: newValue,
                })
              }
            />
          </DemoItem>
        </LocalizationProvider>
        <TextField
          label="Car Value"
          id="filled-size-small"
          variant="standard"
          type="number"
          size="small"
          name="carValue"
          value={inputs.carValue}
          onChange={(ev) =>
            setInputs({ ...inputs, [ev.target.name]: ev.target.value })
          }
        />
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Auction
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={inputs.auction}
            name="auction"
            onChange={(ev) =>
              setInputs({ ...inputs, [ev.target.name]: ev.target.value })
            }
            label="Auction"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Destination
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={inputs.destination}
            onChange={(ev) =>
              setInputs({ ...inputs, [ev.target.name]: ev.target.value })
            }
            name="destination"
            label="Destination"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className="mt-5">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="fs-2">Cost Calcluator</span>
          <button className="btn primaryBtn fs-5">Calculate</button>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "center",
            columnGap: "2rem",
            rowGap: "1rem",
            marginTop: "1rem",
          }}
        >
          <TextField
            label="Auction Fee"
            id="filled-size-small"
            variant="standard"
            size="small"
            disabled
            defaultValue="1"
          />
          <TextField
            label="Broker Fee"
            id="filled-size-small"
            variant="standard"
            size="small"
            disabled
            defaultValue="1"
          />
          <TextField
            label="Environmental Fee"
            id="filled-size-small"
            variant="standard"
            size="small"
            disabled
            defaultValue="1"
          />
          <TextField
            label="Premium Vehicle Report"
            id="filled-size-small"
            variant="standard"
            size="small"
            disabled
            defaultValue="1"
          />
          <TextField
            label="Internal Bid Fee"
            id="filled-size-small"
            variant="standard"
            size="small"
            disabled
            defaultValue="1"
          />
          <TextField
            label="Proxy Bid Fee"
            id="filled-size-small"
            variant="standard"
            size="small"
            disabled
            defaultValue="1"
          />
          <TextField
            label="Ocean Transportation"
            id="filled-size-small"
            variant="standard"
            size="small"
            disabled
            defaultValue="1"
          />
          <TextField
            label="Local Transportation"
            id="filled-size-small"
            variant="standard"
            size="small"
            disabled
            defaultValue="1"
          />
          <TextField
            label="Gate Fee"
            id="filled-size-small"
            variant="standard"
            size="small"
            disabled
            defaultValue="1"
          />
          <TextField
            label="Live Bid"
            id="filled-size-small"
            variant="standard"
            size="small"
            disabled
            defaultValue="1"
          />
          <TextField
            label="Total"
            id="filled-size-small"
            variant="standard"
            size="small"
            disabled
            defaultValue="1"
          />
          <TextField
            label="Import Duty"
            id="filled-size-small"
            variant="standard"
            size="small"
            disabled
            defaultValue="1"
          />
          <TextField
            label="VAT"
            id="filled-size-small"
            variant="standard"
            size="small"
            disabled
            defaultValue="1"
          />
          <TextField
            label="Total Car Price"
            id="filled-size-small"
            variant="standard"
            size="small"
            disabled
            defaultValue="1"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GeneralInfo;
