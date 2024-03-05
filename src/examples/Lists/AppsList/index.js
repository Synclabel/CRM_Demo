/**
 =========================================================
 * Material Dashboard 2 React - v2.2.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2023 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";


import { useContext, useState } from "react";
import { InputContext } from "../../../context/InputContext";

function AppsList({ title, plugins, shadow }) {
  const { pluginsInput, setPluginsInput } = useContext(InputContext);
  const clickHandler = (currentButton) => {
    setPluginsInput(prevState => {
      return {...prevState, [currentButton]: !prevState[currentButton]}
    });
  }


  const renderPlugins = plugins.map(({ image, name, description, action }) => (

    <MDBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <MDBox mr={2}>
        <MDBox component="img" justifyContent="center" width="25px" src={image} alt="Brand" />
      </MDBox>
      <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
        <MDTypography variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption" color="text">
          {description}
        </MDTypography>
      </MDBox>
      <MDBox ml="auto">
        <MDButton onClick={()=>{clickHandler(name.toLowerCase())}} variant={pluginsInput[name.toLowerCase()] ? "contained" : "outlined"} size="small"
                  color="dark">
          {pluginsInput[name.toLowerCase()] ? "Active" : "Activate"}
        </MDButton>
      </MDBox>
    </MDBox>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderPlugins}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the pluginsList
AppsList.defaultProps = {
  shadow: true,
};

// Typechecking props for the pluginsList
AppsList.propTypes = {
  title: PropTypes.string.isRequired,
  plugins: PropTypes.arrayOf(PropTypes.object).isRequired,
  shadow: PropTypes.bool,
};

export default AppsList;
