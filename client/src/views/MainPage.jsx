import React, { useState } from "react";
import {  Link } from "react-router-dom";
import MainNav from '../components/NavBars/MainNav';
import DisplayPhotos from '../components/DisplayPhotos';

const MainPage = () => {

     
  const [droneDetails, setDroneDetails] = useState([])

   return (
      <div>
         <MainNav />
         <DisplayPhotos  droneDetails = { droneDetails } setDroneDetails={ setDroneDetails } />
      </div>
   );
}

export default MainPage;
