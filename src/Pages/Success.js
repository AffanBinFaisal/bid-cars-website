import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { HashLoader } from "react-spinners";
import { processDeposit } from "../redux/user/userSlice";
import Alert from "@mui/material/Alert";

const Success = () => {
  const { email } = useParams();
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(processDeposit({ email: email }));
  }, []);

  if (!error) {
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
        {error && (
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        )}
        {loading ? (
          <HashLoader color="#7a63f1" size={50} />
        ) : (
          <Box textAlign="center" className="fs-3">
            {!error && (
              <>
                <RiVerifiedBadgeFill
                  style={{ fontSize: "50px", color: "#7a63f1" }}
                />
                <Box>Your transaction was succesfull</Box>
              </>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Success;
