import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { verify, reset } from "../redux/user/userSlice";
import { HashLoader } from "react-spinners";

const Verified = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const { isAuthenticated, message, loading, error, userInfo } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  useEffect(() => {
    var i = 0;
    console.log(i++);
    dispatch(verify({ token: token }));
  }, []);

  if (userInfo.verified) {
    dispatch(reset());
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

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
          {loading && <HashLoader color="#7a63f1" size={50} />}
          {!loading && (
            <RiVerifiedBadgeFill
              style={{ fontSize: "50px", color: "#7a63f1" }}
            />
          )}
        </Box>
        {!loading && <Box>Your account has been verified.</Box>}
      </Box>
    </Box>
  );
};

export default Verified;
