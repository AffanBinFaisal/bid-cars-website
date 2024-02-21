import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export default function DropDown(props) {
  return (
    <div>
      <FormControl
        variant="standard"
        sx={{ width: "100%", maxHeight: "300px" }}
      >
        <InputLabel id="demo-simple-select-standard-label">
          {props.placeholder}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          MenuProps={MenuProps}
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          {props.options &&
            props.options.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
