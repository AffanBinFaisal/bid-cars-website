import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { reset, register } from "../redux/user/userSlice";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [userData, setUserdata] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { isAuthenticated, message, loading, error, userInfo } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  const handleRegister = () => {
    dispatch(register(userData));
  };

  useEffect(() => {
    console.log(userData);
    console.log(isAuthenticated, message, loading, error, userInfo);
    if (isAuthenticated || userInfo) {
      navigate("/verify");
    }
    dispatch(reset());
  }, [isAuthenticated, message, loading, error, userInfo]);

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
          <Box className="fs-1">Sign Up</Box>
          <Box className="fs-3">Enter your details below</Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            id="email"
            label="Email*"
            variant="filled"
            value={userData.email}
            onChange={(ev) =>
              setUserdata({ ...userData, email: ev.target.value })
            }
          />
          <TextField
            id="password"
            label="Password*"
            variant="filled"
            type="password"
            value={userData.password}
            onChange={(ev) =>
              setUserdata({ ...userData, password: ev.target.value })
            }
          />
          <button className="btn primaryBtn fs-5" onClick={handleRegister}>
            Sign up
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
