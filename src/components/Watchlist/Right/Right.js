import React, { useEffect } from "react";
import RightCol from "../../Results/RightCol/RightCol";
import { useSelector } from "react-redux";
import axios from "axios";

const Right = () => {
  const { userInfo } = useSelector((state) => state.user);

  const fetchWatchlist = async () => {
    const config = {
      headers: { Authorization: userInfo.token },
    };
    const response = await axios.get("http://localhost:8001/watchlist", config);
    const data = response.data;
    console.log(data);
  };

  useEffect(() => {
    fetchWatchlist();
  }, []);

  return <RightCol />;
};

export default Right;
