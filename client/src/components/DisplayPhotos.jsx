import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DisplayPhotos = () => {
  const { user_id } = useParams();

  const [photos, setPhotos] = useState([]);
  const [userPhotos, setUserPhotos] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allPhotos")
      .then((res) => {
        setPhotos(res.data.photos);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:8000/api/user/photos", {
        withCredentials: true, // Ensure cookies are sent with the request
      })
      .then((res) => {
        console.log(res);
        setUserPhotos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:8000/api/currentUser", {
        withCredentials: true, // Ensure cookies are sent with the request
      })
      .then((res) => {
        console.log(res.data)
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <div className="wrapper ml-20">
     {currentUser && (
  <div>
    <p>Current User: {currentUser.firstName}</p>
  </div>
)}

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
                <Link
                  to={`/photo/${photo._id}`}
                  className="icon-link icon-link-hover text-secondary"
                >
                  View photo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DisplayPhotos;
