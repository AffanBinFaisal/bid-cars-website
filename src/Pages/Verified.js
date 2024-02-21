import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { verifyUser } from "../redux/slice/verificationSlice";
import { HashLoader } from "react-spinners";

const Verified = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const [verified, setVerified] = useState(false);
  const [load, setLoad] = useState(true);
  const { loading, user } = useSelector((state) => state.verify);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Hello");
    dispatch(verifyUser({ token: token }));
  }, []);

  useEffect(() => {
    if (user.verified === true) {
      console.log("Hello");
      setVerified(true);
      setLoad(false);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [loading, user]);

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
          {load && <HashLoader color="#7a63f1" size={50} />}
          {verified && (
            <RiVerifiedBadgeFill
              style={{ fontSize: "50px", color: "#7a63f1" }}
            />
          )}
        </Box>
        {verified && <Box>Your account has been verified.</Box>}
      </Box>
    </Box>
  );
};

export default Verified;
