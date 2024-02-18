import { Box } from "@mui/material";
import React from "react";

const Verify = () => {
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
          bgcolor: "#f4f4f4",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          borderRadius: "10px",
        }}
      >
        <Box textAlign="center" className="fs-3">
          Verify your Email Address
        </Box>
        <Box>
          We have a sent a verification link to your email. Please click on the
          link and verify your account.
        </Box>
      </Box>
    </Box>
  );
};

export default Verify;
