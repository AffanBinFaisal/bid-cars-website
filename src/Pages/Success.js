import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useNavigate, useParams } from "react-router";
import { HashLoader } from "react-spinners";

const Success = () => {
  const { email } = useParams();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const processTransaction = async () => {
    const response = await axios.get("http://localhost:8001/payments/success", {
      params: { email: email },
    });

    if (response.status == 200) {
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  useEffect(() => {
    processTransaction();
  }, []);

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
          {success ? (
            <>
              <RiVerifiedBadgeFill
                style={{ fontSize: "50px", color: "#7a63f1" }}
              />
              <Box>Your transaction was succesfull</Box>
            </>
          ) : (
            <HashLoader color="#7a63f1" size={50} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Success;
