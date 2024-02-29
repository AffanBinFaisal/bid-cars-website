import React from "react";
import DashboardBox from "../../General/DashboardBox/DashboardBox";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const Top = (props) => {
  return (
    <>
      {props.data && (
        <DashboardBox>
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: "#7a63f1" }}>
            <Link underline="hover" color="inherit" href="/">
              Search
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Automobile
            </Link>
            <Link underline="hover" color="inherit" href="/">
              {props.data.make}
            </Link>
            <Link underline="hover" color="inherit" href="/">
              {props.data.model}
            </Link>
            <Link underline="hover" color="inherit" href="/">
              {props.data.vin}
            </Link>
          </Breadcrumbs>
        </DashboardBox>
      )}
    </>
  );
};

export default Top;
