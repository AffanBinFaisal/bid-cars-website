import { Alert, Box, TextField } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/General/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import { withdraw } from "../redux/user/userSlice";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  // const [response, setResponse] = useState(null);
  // const [err, setErr] = useState("");
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const body = { token: userInfo.token, amount: amount };
    console.log(body);
    dispatch(withdraw(body));

    // const config = {
    //   headers: {
    //     "content-type": "application/json",
    //     Authorization: userInfo.user.token,
    //   },
    // };
    // const response = await axios.post(
    //   "http://localhost:8001/payments/withdraw",
    //   {
    //     amount: amount,
    //   },
    //   config
    // );
    // setResponse(response.data.sessionUrl);
  };

  // useEffect(() => {
  //   if (response) {
  //     console.log(response);
  //     window.location.href = response;
  //   }
  // }, [response]);
  return (
    <>
      <Navbar />
      {/* {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <HashLoader color="#7a63f1" size={50} />
        </div>
      ) : ( */}
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
          {error && (
            <Alert variant="filled" severity="error">
              {error}
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
            <Box className="fs-1 mb-5">Withdraw Amount</Box>
            <Box className="fs-3">Enter the amount</Box>
          </Box>

          {loading ? (
            <HashLoader color="#7a63f1" size={50} />
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <TextField
                id="amount"
                label="Amount"
                variant="filled"
                value={amount}
                onChange={(ev) => setAmount(ev.target.value)}
                type="number"
                required
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
                <span>Withdraw</span>
              </button>
            </Box>
          )}
        </Box>
      </Box>
      {/* )} */}
    </>
  );
};

export default Withdraw;
