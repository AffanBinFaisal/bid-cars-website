import { Alert, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const [response, setResponse] = useState("");
  const [wrongEmail, setWrongEmail] = useState(false);

  const handleSubmit = () => {
    sendMail();
  };

  const sendMail = async () => {
    try {
      const config = {
        headers: { "content-type": "application/json" },
      };
      const response = await axios.post(
        "http://localhost:8001/auth/forgot-password",
        { email: email },
        config
      );
      console.log(response.data);
      if (response.status == 200) {
        setWrongEmail(false);
        setMailSent(true);
        setResponse(response.data.message);
      }
    } catch (error) {
      setWrongEmail(true);
      setMailSent(false);
    }
  };

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
          {mailSent && (
            <Alert variant="filled" severity="info">
              {response}. You can now close this tab.
            </Alert>
          )}
          {wrongEmail && (
            <Alert variant="filled" severity="error">
              Invalid Email!
            </Alert>
          )}
          <Box className="fs-1 mb-5">Forgot Password?</Box>
          <Box className="fs-3">Enter your email address</Box>
          <Box className="fs-6" sx={{ color: "#a3a3a3" }}>
            You will recieve an email from us. Click on the link in the email to
            reset your password.
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            id="email"
            label="Email*"
            variant="filled"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
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
            <span>Send email</span>
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
