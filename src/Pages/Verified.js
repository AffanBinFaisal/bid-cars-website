import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { verifyUser } from "../redux/slice/verificationSlice";
import { HashLoader } from "react-spinners";

const Verified = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.verify);

  useEffect(() => {
    dispatch(verifyUser({ token: token }));
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
          {loading && <HashLoader color="#7a63f1" size={50} />}
          {user.verified && (
            <RiVerifiedBadgeFill
              style={{ fontSize: "50px", color: "#7a63f1" }}
            />
          )}
        </Box>
        {user.verified && <Box>Your account has been verified.</Box>}
      </Box>
    </Box>
  );
};

export default Verified;
