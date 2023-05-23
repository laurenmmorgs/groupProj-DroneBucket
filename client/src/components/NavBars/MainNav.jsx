import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const MainNav = () => {
  return (
    <div className="header">
      <nav className="navbar bg-light navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
        <div className="container-fluid">
          <Link to="/display" className="navbar-brand">
            <img src={logo} alt="imageLogo" className="logo" style={{  height: "100px", width: "100px" }}/>

          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/display" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  SignUp
                </Link>
              </li>
              <li className="nav-item" style={{ position: "absolute", right: 10 }}>
                <Link to="/photos/add" className="btn btn-primary">
                  Add A Photo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
