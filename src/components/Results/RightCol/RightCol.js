/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import DashboardBox from "../../General/DashboardBox/DashboardBox";
import { Box, useMediaQuery } from "@mui/material";
// import DropDown from "../../General/DropDown/DropDown";
// import Carousel from "react-bootstrap/Carousel";
import Carousel from "react-material-ui-carousel";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import "./RightCol.css";
import { useDispatch, useSelector } from "react-redux";
import { resultsChanged } from "../../../redux/slice/resultsSlice";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";

const gridTemplateLargeScreen = `
  "left mid right"
`;

const gridTemplateSmallScreen = `
  "main"
`;

const midSectionTemplateLargeScreen = `
  "left right"
`;

// function capitalizeFirstLetterOfEachWord(str) {
//   const words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] =
//       words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//   }
//   return words.join(" ");
// }

const RightCol = () => {
  const isBelowMediumScreen = useMediaQuery("(max-width: 1199px)");
  const filters = useSelector((state) => state.filters);
  const [filteredCars, setFilteredCars] = useState(null);
  let gridTemplateAreas,
    gridTemplateColumns,
    midTemplateAreas,
    midTemplateColumns;

  if (isBelowMediumScreen) {
    gridTemplateAreas = gridTemplateSmallScreen;
    gridTemplateColumns = "1fr";
    midTemplateAreas = midSectionTemplateLargeScreen;
    midTemplateColumns = "1fr 1fr";
  } else {
    gridTemplateAreas = gridTemplateLargeScreen;
    gridTemplateColumns = "2fr 2fr 1fr";
    midTemplateAreas = midSectionTemplateLargeScreen;
    midTemplateColumns = "1fr 1fr";
  }

  const { loading, data, error } = useSelector((state) => state.results);

  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    // const search = location.state;
    // setSearch(search);
    // fetchCars(search);
    if (!loading && !error && data) {
      const payload = data;
      dispatch(resultsChanged(payload));
      setFilteredCars(payload);
    }
  }, [dispatch, loading, data, error]);

  useEffect(() => {
    console.log("Filters changed");
    if (data) {
      console.log(filters.filters.minValue, filters.filters.maxValue);
      const filteredData = data.filter(
        (_data) =>
          _data.odometer >= filters.filters.minValue &&
          _data.odometer <= filters.filters.maxValue
      );

      setFilteredCars(filteredData);
    }
  }, [dispatch, filters]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <DashboardBox>
        <Box
          className="secTitle"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="col-8">Search Results</span>
          {/* <span>
            <DropDown className="col-4" />
          </span> */}
        </Box>
      </DashboardBox>

      {loading ? (
        <DashboardBox>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <HashLoader color="#7a63f1" size={50} />
          </Box>
        </DashboardBox>
      ) : (
        <>
          {filteredCars &&
            filteredCars.map((result) => (
              <DashboardBox>
                <Box
                  height="auto"
                  width="100%"
                  display="grid"
                  gap="1rem"
                  sx={{
                    gridTemplateAreas: gridTemplateAreas,
                    gridTemplateColumns: gridTemplateColumns,
                  }}
                  className="filters"
                >
                  <Box height="100%">
                    {/* <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {result.car_photo.photo.map((singlePhoto) => (
                    <Carousel.Item>
                      <img
                        src={singlePhoto}
                        alt="Car Image"
                        className="homeImage"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel> */}
                    <Carousel>
                      {result.car_photo.photo.map((singlePhoto, i) => (
                        <img src={singlePhoto} alt="Car" />
                      ))}
                    </Carousel>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box paddingBottom=".5rem">
                      <Link
                        to={`/lot/${result.make}/${result.model}/${result.vin}`}
                        className="fs-4 hover"
                        style={{
                          color: "#7a63f1",
                          fontWeight: "bold",
                        }}
                      >
                        {result.year} {result.make} {result.model}
                      </Link>
                    </Box>

                    <Box
                      display="grid"
                      columnGap="1rem"
                      sx={{
                        gridTemplateAreas: midTemplateAreas,
                        gridTemplateColumns: midTemplateColumns,
                      }}
                    >
                      <Box>
                        <div className="flex prop">
                          <span className="propTitle text-nowrap">
                            Number:{" "}
                          </span>
                          <span>
                            {result.lot_number == ""
                              ? "--"
                              : `0-${result.lot_number}`}
                          </span>
                        </div>
                        <div className="flex prop">
                          <span className="propTitle text-nowrap">VIN: </span>
                          <span>
                            {result.vin == "" ? "--" : `${result.vin}`}
                          </span>
                        </div>
                        <div className="flex prop">
                          <span className="propTitle text-nowrap">
                            Milage:{" "}
                          </span>
                          <span>
                            {result.odometer == ""
                              ? "--"
                              : `${result.odometer} miles (${Math.round(
                                  result.odometer * 1.60934
                                )} kms)`}
                          </span>
                        </div>
                        <div className="flex prop">
                          <span className="propTitle text-nowrap">
                            Location:{" "}
                          </span>
                          <span>
                            {result.location == ""
                              ? "--"
                              : `${result.location}`}
                          </span>
                        </div>
                      </Box>
                      <Box>
                        <div className="flex prop">
                          <span className="propTitle text-nowrap">
                            Seller:{" "}
                          </span>
                          <span>
                            {result.seller == "" ? "--" : `${result.seller}`}
                          </span>
                        </div>
                        <div className="flex prop">
                          <span className="propTitle text-nowrap">
                            Sale doc.:{" "}
                          </span>
                          <span>
                            {result.doc_type == ""
                              ? "--"
                              : `${result.doc_type}`}
                          </span>
                        </div>
                        <div className="flex prop">
                          <span className="propTitle text-nowrap">
                            Damage:{" "}
                          </span>
                          <span>
                            {result.primary_damage == ""
                              ? "--"
                              : `${result.primary_damage}`}{" "}
                            |{" "}
                            {result.secondary_damage == ""
                              ? "--"
                              : `${result.secondary_damage}`}
                          </span>
                        </div>
                        <div className="flex prop">
                          <span className="propTitle text-nowrap">
                            Status:{" "}
                          </span>
                          <span style={{ fontWeight: "bold" }}>
                            {result.highlights == ""
                              ? "--"
                              : `${result.highlights}`}
                          </span>
                        </div>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <div className="time">
                      <CalendarTodayIcon /> Fri 9 Feb, 19:30 GMT+5
                    </div>
                    {result.active_bidding[0].current_bid && (
                      <div className="price1">
                        Current Bid ${result.active_bidding[0].current_bid}
                      </div>
                    )}

                    {result.buy_now_car && (
                      <div className="price2">
                        Buy Now ${result.buy_now_car.purchase_price}
                      </div>
                    )}
                    <div className="time">Fri 9 Feb, 19:30 GMT+5</div>
                  </Box>
                </Box>
              </DashboardBox>
            ))}
        </>
      )}
    </div>
  );
};

export default RightCol;
