import React from "react";
import DashboardBox from "../../General/DashboardBox/DashboardBox";
import { Box } from "@mui/material";

const Right = () => {
  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <DashboardBox />
      <DashboardBox />
    </Box>
  );
};

export default Right;
