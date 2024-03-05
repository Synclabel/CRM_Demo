import React from "react";
import Grid from "@mui/material/Grid";
import MDBox from "../MDBox";
import MDButton from "../MDButton";
import PropTypes from "prop-types";

//Icons





const IndustryButton = ({icon, children, enabled, xs, sm, lg, onclickFunc, id}) => {

  const clickHandler = () => {
    onclickFunc(id)
  };



  return enabled? (
    <Grid item xs={xs} sm={sm} lg={lg}>
      <MDBox p={2}>
        <MDButton onClick={clickHandler}  id={id} variant="text" color="dark" size="small">
          <MDBox
            component="img"
            justifyContent="center"
            height="25px"
            src={icon}
            alt="Brand"
          />
          &nbsp;{children}
        </MDButton>
      </MDBox>
    </Grid>
  ) : (
    <Grid item xs={12} sm={12} lg={3.2}>
      <MDBox p={2}>
        <MDButton  onClick={clickHandler} variant="contained" color="dark" size="small">
          <MDBox
            component="img"
            justifyContent="center"
            height="25px"
            src={icon}
            alt="Brand"
          />
          &nbsp;{children}
        </MDButton>
      </MDBox>
    </Grid>
  )
};

export default IndustryButton;

IndustryButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  enabled: PropTypes.bool,
  xs:PropTypes.number,
  lg:PropTypes.number,
  sm:PropTypes.number,
  onclickFunc:PropTypes.func,
  id:PropTypes.string
};
