import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/background.jpg";
import { motion } from "framer-motion";

const MainNav = () => {
  return (
    <div>
      <div className="header">
        <nav
          className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top 25%",
            height: "300px",
          }}
          data-bs-theme="dark"
        >
          <div
            className="container-fluid"
            style={{ position: "absolute", right: 10, top: 40 }}
          >
            
            <Link to="/display" className="navbar-brand">
              <img
                src={logo}
                alt="imageLogo"
                className="logo"
                style={{ height: "100px", width: "100px" }}
              />
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

          {/* This goes to the nav bar links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/display"
                    className="nav-link active"
                    aria-current="page"
                  >
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
                <li
                  className="nav-item"
                  style={{ position: "absolute", right: 10, top: 40 }}
                >
                  <motion.div
                    className="box"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link to="/photos/add" className="btn btn-primary">
                      Add A Photo
                    </Link>
                  </motion.div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainNav;
