import React from "react";
import DashboardBox from "../../General/DashboardBox/DashboardBox";
import { Box } from "@mui/material";
import CopyToClipboard from "../../General/CopyToClipboard/CopyToClipboard";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MUITable from "../../General/MUITable/MUITable";
import VehicleOptions from "../../HomePage/VehicleOptions/VehicleOptions";

const Below = (props) => {
  return (
    <>
      {props.data.map((carInfo) => (
        <>
          <DashboardBox>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  className="fs-5"
                  style={{
                    color: "#7a63f1",
                  }}
                >
                  {carInfo.year} {carInfo.make} {carInfo.model}
                </span>
                <span className="btn primaryBtn">{carInfo.auction_name}</span>
                <span
                  style={{
                    border: "1px solid grey",
                    padding: ".5rem",
                    borderRadius: "10px",
                  }}
                >
                  Live Auction | {carInfo.created_at}
                </span>
              </Box>
              <Box>
                <span
                  style={{
                    backgroundColor: "rgb(230, 230, 230)",
                    padding: ".5rem",
                    borderRadius: "10px",
                  }}
                >
                  Current Bid: ${carInfo.active_bidding[0] ? carInfo.active_bidding[0].current_bid : null}
                </span>
              </Box>
            </Box>

            <Box>
              <Box display="flex" gap="1rem">
                <div>
                  <span className="propTitle">Lot: </span>
                  <span className="text-nowrap fst-italic">
                    0-{carInfo.lot_number}
                  </span>
                  <CopyToClipboard value="0-37156122" />
                </div>
                <div>
                  <span className="propTitle">VIN: </span>
                  <span className="text-nowrap fst-italic">{carInfo.vin}</span>
                  <CopyToClipboard value="KM8J23A49LU169525" />
                </div>
              </Box>
              <div>
                <span className="propTitle">Sale Document: </span>
                <span className="text-nowrap fst-italic">
                  {carInfo.doc_type}
                </span>
              </div>
              <div>
                <span className="propTitle">Seller: </span>
                <span className="text-nowrap fst-italic">{carInfo.seller}</span>
              </div>
              <div>
                <span className="propTitle">Estimated final price: </span>
                <span className="text-nowrap fst-italic">$4,550 - $7,440 </span>
              </div>
              <div>
                <span className="propTitle">Engine: </span>
                <span className="text-nowrap fst-italic">
                  {carInfo.engine_type}
                </span>
              </div>
            </Box>
          </DashboardBox>

          <DashboardBox>
            <Accordion sx={{ background: "#f4f4f4" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <span className="secTitle">Sales History (100)</span>
              </AccordionSummary>
              <AccordionDetails>
                <MUITable />
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ background: "#f4f4f4" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <span className="secTitle">Archived offers of this model</span>
              </AccordionSummary>
              <AccordionDetails>
                <VehicleOptions type="Cars" quantity="123" />
              </AccordionDetails>
            </Accordion>
          </DashboardBox>
        </>
      ))}
    </>
  );
};

export default Below;
