import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDown(props) {
  return (
    <div>
      <FormControl variant="standard" sx={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-standard-label">
          {props.placeholder}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          {props.options && props.options.map(option => (
            <MenuItem value={option}>
              {option}
            </MenuItem>
          ))}
          
        </Select>
      </FormControl>
    </div>
  );
}
