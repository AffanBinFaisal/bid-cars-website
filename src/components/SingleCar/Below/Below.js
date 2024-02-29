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
      {props.data && (
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
                  {props.data.year} {props.data.make} {props.data.model}
                </span>
                <span className="btn primaryBtn">
                  {props.data.auction_name}
                </span>
                <span
                  style={{
                    border: "1px solid grey",
                    padding: ".5rem",
                    borderRadius: "10px",
                  }}
                >
                  Live Auction | {props.data.created_at}
                </span>
              </Box>
              {props.data.active_bidding &&
              Array.isArray(props.data.active_bidding) &&
              props.data.active_bidding.length > 0 ? (
                <Box>
                  <span
                    style={{
                      backgroundColor: "rgb(230, 230, 230)",
                      padding: ".5rem",
                      borderRadius: "10px",
                    }}
                  >
                    Current Bid: ${props.data.active_bidding[0].current_bid}
                  </span>
                </Box>
              ) : null}
            </Box>

            <Box>
              <Box display="flex" gap="1rem">
                <div>
                  <span className="propTitle">Lot: </span>
                  <span className="text-nowrap fst-italic">
                    {props.data.lot_number}
                  </span>
                  <CopyToClipboard value={props.data.lot_number} />
                </div>
                <div>
                  <span className="propTitle">VIN: </span>
                  <span className="text-nowrap fst-italic">
                    {props.data.vin}
                  </span>
                  <CopyToClipboard value={props.data.vin} />
                </div>
              </Box>
              <div>
                <span className="propTitle">Sale Document: </span>
                <span className="text-nowrap fst-italic">
                  {props.data.doc_type}
                </span>
              </div>
              <div>
                <span className="propTitle">Seller: </span>
                <span className="text-nowrap fst-italic">
                  {props.data.seller}
                </span>
              </div>
              <div>
                <span className="propTitle">Estimated final price: </span>
                <span className="text-nowrap fst-italic">$4,550 - $7,440 </span>
              </div>
              <div>
                <span className="propTitle">Engine: </span>
                <span className="text-nowrap fst-italic">
                  {props.data.engine_type}
                </span>
              </div>
            </Box>
          </DashboardBox>

          {/* <DashboardBox>
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
          </DashboardBox> */}
        </>
      )}
    </>
  );
};

export default Below;
