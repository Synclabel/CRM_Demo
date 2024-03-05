import React from "react";
import MDBox from "../MDBox";
import MDButton from "../MDButton";
import UploadIcon from "@mui/icons-material/Upload";
import PropTypes from "prop-types";
import DashboardPlugInCard from "./DashboardPlugInCard";

const FakeUpload = ({onClickFunc, stateSubscriber, uploadedFileName,py}) => {

  const clickHandler =()=>{
    onClickFunc()
  }

  return (
    <MDBox alignSelf={'center'} onClick={clickHandler} py={py?py:"2rem"} /*minWidth={400}*/ sx={{borderStyle:"dotted", display:"flex", alignItems:'center', justifyContent:'center'}}>
      <MDButton startIcon={<UploadIcon/>} >{stateSubscriber?uploadedFileName:'Upload files'} </MDButton>
    </MDBox>
  );
};

export default FakeUpload;
FakeUpload.propTypes = {
  onClickFunc: PropTypes.func,
  stateSubscriber:PropTypes.bool,
  uploadedFileName:PropTypes.string,
  py:PropTypes.string
};