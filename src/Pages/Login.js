import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../redux/slice/loginSlice";
import { login, reset } from "../redux/user/userSlice";
import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserdata] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, message, loading, error, userInfo } = useSelector(
    (state) => state.user
  );

  const handleLogin = () => {
    dispatch(login(userData));
  };

  useEffect(() => {
    console.log(userData);
    console.log(isAuthenticated, message, loading, error, userInfo);
    if (isAuthenticated || userInfo) {
      navigate("/");
    }

    dispatch(reset());
  }, [dispatch, navigate, userInfo, error, message, loading, isAuthenticated]);

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
      {error && (
        <Alert variant="filled" severity="error">
          Invalid email or password
        </Alert>
      )}

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
          <Box className="fs-1">Log In</Box>
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
          <button
            className="btn primaryBtn fs-5"
            onClick={handleLogin}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {loading && <HashLoader color="#7a63f1" size={20} />}
            <span>Log In</span>
          </button>
          <Link
            style={{ textAlign: "center", color: "#7a63f1" }}
            to="/forgot-password"
          >
            Forgot Password?
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
