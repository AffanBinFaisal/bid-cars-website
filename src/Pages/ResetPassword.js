import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { HashLoader } from "react-spinners";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = () => {};

  useEffect(() => {});

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box className="fs-1">Forgot Password</Box>
          <Box className="fs-3">Enter your new password below</Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            id="password"
            label="New Password*"
            variant="filled"
            value={newPassword}
            onChange={(ev) => setNewPassword(ev.target.value)}
          />
          <button
            className="btn primaryBtn fs-5"
            onClick={handleSubmit}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {/* {loading && <HashLoader color="#7a63f1" size={20} />} */}
            <span>Reset password</span>
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;
