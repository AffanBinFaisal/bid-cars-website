import axios from "axios";

const login = async (userData) => {
  const config = {
    headers: { "content-type": "application/json" },
  };
  //   console.log(userData);
  const response = await axios.post(
    "http://localhost:8001/auth/login",
    userData,
    config
  );

  if (response.data) {
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  }
  return response.data;
};

const register = async (userData) => {
  const config = {
    headers: { "content-type": "application/json" },
  };
  //   console.log(userData);
  const response = await axios.post(
    "http://localhost:8001/auth/register",
    userData,
    config
  );

  if (response.data) {
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  }
  return response.data;
};

const verify = async (params) => {
  const response = await axios.get(
    `http://localhost:8001/auth/verify/${params.token}`
  );
  return response.data;
};

const deposit = async (params) => {
  const response = await axios.get("http://localhost:8001/payments/success", {
    params,
  });
  return response.data;
};

const withdraw = async (body) => {
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: body.token,
    },
  };
  const response = await axios.post(
    "http://localhost:8001/payments/withdraw",
    {
      amount: body.amount,
    },
    config
  );
  return response.data;
};

const authService = {
  login,
  register,
  verify,
  deposit,
  withdraw,
};

export default authService;
