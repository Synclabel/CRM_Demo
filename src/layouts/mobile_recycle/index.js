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

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";
import ProductCard from "examples/Cards/BlogCards/ProductCard";

import { MuiFileInput } from "mui-file-input";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MDAvatar from "components/MDAvatar";

import AddIcon from "assets/images/adddd.png";
import PageLayout from "examples/LayoutContainers/PageLayout";
import Mobileimage from "assets/images/recycle_map.png";
import { CardMedia } from "@mui/material";

function MobileRecycle() {
  return (
    <PageLayout>
      <MDBox mt={0} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={12} mx={4} mt={1}>
            <MDTypography variant="h4" fullWidth alignContent="center">
              Interactive Recycle Sites
            </MDTypography>
          </Grid>
          <Grid item xs={12} lg={12}>
            <MDBox
              component="img"
              justifyContent="center"
              height={685}
              src={Mobileimage}
              alt="Brand"
            />
          </Grid>
        </Grid>
      </MDBox>
    </PageLayout>
  );
}

export default MobileRecycle;
