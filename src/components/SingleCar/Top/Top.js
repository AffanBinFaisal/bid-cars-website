import React from "react";
import DashboardBox from "../../General/DashboardBox/DashboardBox";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const Top = () => {
  return (
    <DashboardBox>
      <Breadcrumbs aria-label="breadcrumb" sx={{ color: "#7a63f1" }}>
        <Link underline="hover" color="inherit" href="/">
          Search
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Automobile
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Hyundai
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Tucson
        </Link>
        <Link underline="hover" color="inherit" href="/">
          3rd Gen TL
        </Link>
        <Link underline="hover" color="inherit" href="/">
          2020 Hyundai Tucson KM8J23A49LU169525
        </Link>
      </Breadcrumbs>
    </DashboardBox>
  );
};

export default Top;
