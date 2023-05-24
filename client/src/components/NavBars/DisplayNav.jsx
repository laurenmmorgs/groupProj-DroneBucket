import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DisplayNav = () => {
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
        <header>
      <motion.h1
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: 0 }}
        style={{color:"white"}}
      >
        Drone Bucket
      </motion.h1>
    </header>
          <motion.div
            className="box "
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            style={{ position: "absolute", right: 40 }}
          >
            <Link to="/display" className="btn btn-primary">
              Back To Home Page
            </Link>
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default DisplayNav;
