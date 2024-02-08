import React from "react";
import DashboardBox from "../../General/DashboardBox/DashboardBox";
import { Box } from "@mui/material";

const Left = () => {
  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <DashboardBox />
      <DashboardBox />
    </Box>
  );
};

export default Left;
