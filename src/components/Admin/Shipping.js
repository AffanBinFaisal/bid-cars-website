import { Box, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Shipping = () => {
  const [inputs, setInputs] = useState({
    finalDestination: "",
    shippingLine: "",
    vesselName: "",
    containerNumber: "",
  });
  const { user } = useSelector((state) => state.login);

  // console.log(inputs);
  // admin/update/:id
  const handleUpdate = async () => {
    try {
      const config = {
        headers: { Authorization: user.token },
      };
      const response = await axios.post(
        `http://localhost:8001/shippings/admin/update/65d63dd0685f9a07729cf67e`,
        inputs,
        config
      );
      console.log(response.status);
      // setShippingImages(response.data.shipping.images);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

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
          label="Final Destination"
          id="filled-size-small"
          variant="standard"
          size="small"
          required
          name="finalDestination"
          onChange={(ev) =>
            setInputs({ ...inputs, [ev.target.name]: ev.target.value })
          }
          value={inputs.finalDestination}
        />
        <TextField
          label="Shipping Line"
          id="filled-size-small"
          variant="standard"
          size="small"
          required
          name="shippingLine"
          onChange={(ev) =>
            setInputs({ ...inputs, [ev.target.name]: ev.target.value })
          }
          value={inputs.shippingLine}
        />
        <TextField
          label="Vessel Name"
          id="filled-size-small"
          variant="standard"
          size="small"
          required
          name="vesselName"
          onChange={(ev) =>
            setInputs({ ...inputs, [ev.target.name]: ev.target.value })
          }
          value={inputs.vesselName}
        />
        <TextField
          label="Container Number"
          id="filled-size-small"
          variant="standard"
          size="small"
          required
          name="containerNumber"
          onChange={(ev) =>
            setInputs({ ...inputs, [ev.target.name]: ev.target.value })
          }
          value={inputs.containerNumber}
        />
      </Box>
      <Box textAlign={"end"} className="mt-3">
        <button className="btn primaryBtn" onClick={handleUpdate}>
          Update
        </button>
      </Box>
    </Box>
  );
};

export default Shipping;
