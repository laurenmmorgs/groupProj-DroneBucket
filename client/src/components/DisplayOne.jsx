import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DisplayOne = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState([]);

  const [likes, setLikes] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/${id}`)
      .then((res) => {
        console.log(res.data.photo);
        setPhoto(res.data.photo);
      })
      .catch((err) => console.log(err));
  });

  //deletes from the database  buys the item
  const deleteHandler = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8000/api/delete/${id}`)
      .then((res) => {
        console.log(res);
        const updatedPhoto = photo.filter((photos) => photos._id !== id);
        setPhoto(updatedPhoto);
        navigate("/display");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-3">
      <div className="d-flex justify-content-evenly">
        <div className=" row">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 2 }}>
            <img
              src={`http://localhost:8000/${photo.imageUploaded}`}
              style={{ width: "500px", height: "350px" }}
              alt={photo.title}
              className="border  border-3 border-dark rounded"
            />
          </motion.div>
          <span>
            <h2> Description : {photo.description} </h2>
          </span>
        </div>
        <div>
          <div style={{ marginBottom: "2rem" }}>
            <h1>Product: {photo.title}</h1>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <motion.div
              style={{
                width: 150,
                height: 50,
                borderRadius: 30,
                backgroundColor: "#cf1969",
                cursor: "pointer",
              }}
              whileTap={{ rotate: 10, scale: 0.75 }}
            >
              <Link
                style={{
                  fontSize: "15px",
                  opacity: 0.7,
                  margin: 50,
                  textAlign: "center",
                  color: "white",
                  textDecoration: "none" /* Remove underline */,
                }}
                to={"/display"}
                onClick={(e) => {
                  deleteHandler(photo._id);
                }}
              >
                Delete
              </Link>
            </motion.div>
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <motion.div
              style={{
                width: 150,
                height: 50,
                borderRadius: 30,
                backgroundColor: "#18ab69",
                cursor: "pointer",
              }}
              whileTap={{ rotate: 10, scale: 0.75 }}
              onClick={() => setLikes(likes + 1)}
            >
              <h1
                style={{
                  fontSize: "30px",
                  opacity: 0.7,
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {likes} Likes
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default DisplayOne;
