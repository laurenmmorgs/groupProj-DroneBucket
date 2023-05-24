import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DisplayPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allPhotos")
      .then((res) => {
        setPhotos(res.data.photos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="wrapper ml-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 3 }}
        transition={{ duration: 3 }}
        className="text-center"
      >
        <h1> Photos From Our Users </h1>
      </motion.div>
      <div className="row d-flex justify-content-center mx-auto p-2 grid gap-3">
        {photos.map((photo) => (
          <div
            key={photo._id}
            className="card rounded p-2"
            style={{ width: "18rem" }}
          >
            <img
              src={`http://localhost:8000/${photo.imageUploaded}`}
              className="card-img-top img-fluid"
              style={{
                width: "100%",
                height: "15vw",
                objectFit: "cover",
              }}
              alt={photo.title}
            />
            <div className="text-center">
              <div className="card-body">
                <Link className="card-title" to={`/photo/${photo._id}`}>
                  {photo.title}
                </Link>
                <p className="card-text">Title: {photo.title}</p>

                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to={`/photo/${photo._id}`}
                    className="icon-link icon-link-hover text-secondary"
                  >
                    View photo
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DisplayPhotos;
