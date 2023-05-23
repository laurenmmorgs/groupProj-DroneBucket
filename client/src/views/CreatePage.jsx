import React, { useState } from "react";
import DisplayNav from '../components/NavBars/DisplayNav';
import UploadPhoto from '../components/UploadPhoto';

const CreatePage = () => {

   
  
  const [droneDetails, setDroneDetails] = useState([])
  const [imageDetails, setImageDetails] = useState([])
  return (
   <div>
   <DisplayNav /> 
   <UploadPhoto droneDetails= { droneDetails } setDroneDetails = {setDroneDetails} imageDetails = { imageDetails} setImageDetails = {setImageDetails}  /></div>
  );
};

export default CreatePage;
