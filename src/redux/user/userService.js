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

// const deposit = async (params) => {
//   const config = {
//     headers: {
//       "content-type": "application/json",
//       Authorization: params.token,
//     },
//   };
//   const response = await axios.post(
//     "http://localhost:8001/payments/deposit",
//     {
//       amount: params.amount,
//       description: "Depositing Money",
//     },
//     config
//   );
//   return response.data.sessionUrl;
// };

const authService = {
  login,
  register,
  verify,
};

export default authService;
