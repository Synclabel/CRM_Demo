import React from "react";
import MDBox from "../MDBox";
import RouteIcon from "../../assets/images/RouteIcon.png";
import MDTypography from "../MDTypography";
import MDButton from "../MDButton";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import IndustryButton from "./IndustryButton";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";

const DashboardPlugInCard = ({ text, name, btnText, route, icon,isActive, changeActiveState }) => {
  const navigate = useNavigate()

  const clickHandler = (e) => {
    navigate(route)
  };


  return (
    <Grid item xs={12} lg={3}>
      <Card>
        <FormControlLabel sx={{paddingX:'1.5rem'}} control={<Checkbox onClick={changeActiveState} checked={isActive}/>} label={isActive?"Active":"Activate"} />
        <MDBox px={4} py={3} height="13rem">
          <MDBox
            component="img"
            justifyContent="center"
            height="24px"
            // src={RouteIcon}
            src={icon}
            alt="Brand"
          />
          &nbsp;
          <MDTypography variant="button" fontWeight="bold" height="24px">
            {name}
            {/*Traceability*/}
          </MDTypography>
          <br />
          <MDTypography
            variant="body2"
            fontWeight="light"
            p={0}
            sx={{ lineHeight: 1.5, m: 0, fontSize: 14 }}
          >
            {text}
            {/*Let the consumer know something something something*/}
          </MDTypography>
          <br />
          <MDButton onClick={clickHandler} variant="outlined" color="dark" size="small" fullWidth>
            {btnText}
            {/*Activate*/}
          </MDButton>
        </MDBox>
      </Card>
    </Grid>
  );
};

export default DashboardPlugInCard;

DashboardPlugInCard.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  text: PropTypes.string,
  btnText: PropTypes.string,
  route: PropTypes.string,
  icon: PropTypes.string,
  isActive: PropTypes.bool,
  changeActiveState: PropTypes.func
};