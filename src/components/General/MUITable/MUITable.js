import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import "./MUITable.css";

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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(auction, date, lot, f_bid, odometer, status, seller) {
  return { auction, date, lot, f_bid, odometer, status, seller };
}

const rows = [
  createData(
    "Copart",
    "2021-10-29",
    "1-60818171",
    "16,700",
    "62 765 mi",
    "Not sold",
    "No information"
  ),
  createData(
    "Copart",
    "2021-10-29",
    "1-60818171",
    "16,700",
    "62 765 mi",
    "Not sold",
    "No information"
  ),
  createData(
    "Copart",
    "2021-10-29",
    "1-60818171",
    "16,700",
    "62 765 mi",
    "Not sold",
    "No information"
  ),
  createData(
    "Copart",
    "2021-10-29",
    "1-60818171",
    "16,700",
    "62 765 mi",
    "Not sold",
    "No information"
  ),
  createData(
    "Copart",
    "2021-10-29",
    "1-60818171",
    "16,700",
    "62 765 mi",
    "Not sold",
    "No information"
  ),
];

const MUITable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table" sx={{ minWidth: "800px" }}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" sx={{ fontSize: "small" }}>
              Auction
            </StyledTableCell>
            <StyledTableCell align="left" sx={{ fontSize: "small" }}>
              Date
            </StyledTableCell>
            <StyledTableCell align="left" sx={{ fontSize: "small" }}>
              Lot #
            </StyledTableCell>
            <StyledTableCell align="left" sx={{ fontSize: "small" }}>
              Final Bid
            </StyledTableCell>
            <StyledTableCell align="left" sx={{ fontSize: "small" }}>
              Odometer
            </StyledTableCell>
            <StyledTableCell align="left" sx={{ fontSize: "small" }}>
              Status
            </StyledTableCell>
            <StyledTableCell align="left" sx={{ fontSize: "small" }}>
              Seller
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.auction}>
              <StyledTableCell component="th" scope="row">
                <Link className="table-link">{row.auction}</Link>
              </StyledTableCell>
              <StyledTableCell align="left" className="text-nowrap">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="left">{row.lot}</StyledTableCell>
              <StyledTableCell align="left">
                <span className="money">$ {row.f_bid}</span>
              </StyledTableCell>
              <StyledTableCell align="left">{row.odometer}</StyledTableCell>
              <StyledTableCell align="left">{row.status}</StyledTableCell>
              <StyledTableCell align="left">{row.seller}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MUITable;
