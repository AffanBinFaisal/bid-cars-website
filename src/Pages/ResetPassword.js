import { Alert, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { HashLoader } from "react-spinners";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const { token } = useParams();
  // const navigate = useNavigate();
  const [reset, setReset] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = () => {
    resetPassword();
  };

  const resetPassword = async () => {
    try {
      const config = {
        headers: { "content-type": "application/json" },
      };
      const response = await axios.post(
        `http://localhost:8001/auth/reset-password/${token}`,
        { newPassword: newPassword },
        config
      );
      console.log(response.data);
      if (response.status == 200) {
        setReset(true);
        setError(true);
        setResponse(response.data.message);
      }
    } catch (error) {
      setReset(false);
      setError(true);
    }
  };

  // if (reset) {
  // navigate();
  // }

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
        {reset && (
          <Alert variant="filled" severity="info">
            {response}. Redirecting you to the login page.
          </Alert>
        )}
        {error && (
          <Alert variant="filled" severity="error">
            Invalid token or user not found
          </Alert>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box className="fs-3">Enter your new password below</Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            id="password"
            label="New Password*"
            variant="filled"
            value={newPassword}
            onChange={(ev) => setNewPassword(ev.target.value)}
            type="password"
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
