import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import SearchBar from "../components/General/SearchBar/SearchBar";
import { Box, useMediaQuery } from "@mui/material";
import LeftCol from "../components/Results/LeftCol/LeftCol";
import RightCol from "../components/Results/RightCol/RightCol";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchResults } from "../redux/slice/resultsSlice";

const gridTemplateLargeScreen = `
  "left right"
`;

const gridTemplateSmallScreen = `
  "main"
`;

const CurrentResults = () => {
  const isBelowMediumScreen = useMediaQuery("(max-width: 991px)");

  let gridTemplateAreas, gridTemplateColumns;

  if (isBelowMediumScreen) {
    gridTemplateAreas = gridTemplateSmallScreen;
    gridTemplateColumns = "1fr";
  } else {
    gridTemplateAreas = gridTemplateLargeScreen;
    gridTemplateColumns = "1fr 3fr";
  }

  // const [search, setSearch] = useState({});
  // const [results, setResults] = useState([]);

  // const location = useLocation();
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // const search = location.state;
    // setSearch(search);
    // fetchCars(search);
    dispatch(fetchResults(search));
  }, []);

  // const fetchCars = async (params) => {
  //   const response = await axios.get("http://localhost:8001/cars", {
  //     params: params,
  //   });
  //   const data = response.data;
  //   setResults(data.result);
  //   console.log(data.result);
  // };

  // console.log(data);

  return (
    <div className="container">
      <SearchBar />
      <Box
        height="100%"
        width="100%"
        display="grid"
        padding="4rem 0"
        gap="1rem"
        sx={{
          gridTemplateAreas: gridTemplateAreas,
          gridTemplateColumns: gridTemplateColumns,
        }}
        className="filters"
      >
        <LeftCol />
        <RightCol />
      </Box>
    </div>
  );
};

export default CurrentResults;
