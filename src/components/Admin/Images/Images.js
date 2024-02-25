import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Images = () => {
  const { user } = useSelector((state) => state.login);

  const [images, setImage] = useState();
  const [success, setSuccess] = useState(false);
  const [remove, setRemove] = useState(false);
  const [shippingImages, setShippingImages] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      const data = new FormData();
      for (let i = 0; i < images.length; i++) {
        data.append("images", images[i]);
      }
      console.log(data);
      const response = await axios.post(
        `http://localhost:8001/images/add/65d63dd0685f9a07729cf67e`,
        data,
        config
      );
      if (response.status == 200) {
        setSuccess(true);
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  const getImages = async () => {
    try {
      const config = {
        headers: { Authorization: user.token },
      };
      const response = await axios.get(
        `http://localhost:8001/shippings/65d63dd0685f9a07729cf67e`,
        config
      );
      setShippingImages(response.data.shipping.images);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleDelete = async (imageId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8001/images/delete/65d63dd0685f9a07729cf67e/${imageId}`
      );
      console.log(response.data.message);
      if (response.status == 200) {
        setRemove(true);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    getImages();
    success && setSuccess(false);
    remove && setRemove(false);
  }, [success, remove]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="fs-2">Images</span>
        <Box>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              id="image"
              multiple
              // hidden
              onChange={(ev) => setImage(ev.target.files)}
            />
            {/* <label
              htmlFor="image"
              style={{
                backgroundColor: "#7a63f1",
                color: "white",
                borderRadius: "10px",
                padding: "10px",
                cursor: "pointer",
              }}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            > 
             Choose Files
            </label> */}
            <button className="btn primaryBtn">Upload</button>
          </form>
        </Box>
      </Box>
      {shippingImages.map((image) => (
        <Box>
          <img
            src={`http://localhost:8001/images/${image.filename}`}
            alt="Hello"
          />
          <button onClick={() => handleDelete(image._id)}>Delete</button>
        </Box>
      ))}
    </Box>
  );
};

export default Images;
