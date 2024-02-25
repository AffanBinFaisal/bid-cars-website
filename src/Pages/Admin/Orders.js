import { Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#7a63f1",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(number, name, vin_number) {
  return { number, name, vin_number };
}

const rows = [
  createData("1", "Ahmed", "1-60818171"),
  createData("2", "Affan", "1-60818171"),
  createData("3", "Affan", "1-60818171"),
  createData("4", "Affan", "1-60818171"),
  createData("5", "Affan", "1-60818171"),
];

const Orders = () => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/admin/orders/edit");
  };

  return (
    <Box className="container">
      <span className="fs-1 mb-5">Orders</span>
      <TableContainer
        component={Paper}
        sx={{ marginTop: "2rem", width: "100%" }}
      >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Number</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Vin Number</StyledTableCell>
              <StyledTableCell align="left">Options</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.number}>
                <StyledTableCell component="th" scope="row">
                  {row.number}
                </StyledTableCell>
                <StyledTableCell align="left" className="text-nowrap">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.vin_number}</StyledTableCell>
                <StyledTableCell
                  align="left"
                  sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <button className="btn primaryBtn" onClick={handleEdit}>
                    <CiEdit size={20} />
                  </button>
                  <button className="btn primaryBtn">
                    <MdDelete size={20} />
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Orders;
