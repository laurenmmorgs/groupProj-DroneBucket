import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

const DisplayOne = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState([]);

  const [likes, setLikes] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/${id}`)
      .then((res) => {
        console.log(res.data.photo);
        setPhoto(res.data.photo);
      })
      .catch((err) => console.log(err));
  }, []);

  //deletes from the database when user buys the item
  const deleteHandler = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8000/api/delete/${id}`)
      .then((res) => {
        console.log(res);
        const updatedPhoto = photo.filter((photos) => photos._id !== id);
        setPhoto(updatedPhoto);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-3">
      <div className="d-flex justify-content-evenly">
        <div className=" row">
          <img
            src={`http://localhost:8000/${photo.imageUploaded}`}
            style={{ width: "500px", height: "350px" }}
          />
          
        </div>
        <div>
          <h1> Product: {photo.title} </h1>
          <p> Description : {photo.description} </p>
          <Link
            className="btn btn-danger btn-sm"
            onClick={(e) => {
              deleteHandler(photo._id);
            }}
            to={"/display"}
          >
            Delete {photo.title}
          </Link>
          <br></br>
          <button
              className="btn btn-success"
              onClick={() => setLikes(likes + 1)}
            >
              {likes} Likes
            </button>
        </div>

        <div></div>
      </div>
      <br />
    </div>
  );
};

export default DisplayOne;
