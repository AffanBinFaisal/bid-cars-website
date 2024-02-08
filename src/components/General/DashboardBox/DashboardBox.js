import { Box } from "@mui/material";
import styled from "@emotion/styled";

const DashboardBox = styled(Box)(() => ({
  backgroundColor: "#f4f4f4",
  borderRadius: ".5rem",
  width: "100%",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
}));

export default DashboardBox;
