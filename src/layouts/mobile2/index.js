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
import Mobileimage from "assets/images/luma_mob1.png";
import { CardMedia, Stack } from "@mui/material";
import Trace from "./Trace";

function Mobile2() {
  return (
    <PageLayout>
      <MDBox mt={0} mb={3}>
        <Trace />
      </MDBox>
      <Stack spacing={0} px={3}>
        <MDTypography variant="h6" fullWidth alignContent="center">
          Where can you get the free LUMA?
        </MDTypography>
        <MDTypography variant="h6" fullWidth fontWeight="regular" alignContent="center">
          You can use our coupon in:
        </MDTypography>
        <Stack spacing={1} py={1} px={1}>
          <MDTypography variant="h6" fullWidth fontWeight="regular" alignContent="center">
            Bars and Pubs
          </MDTypography>
          <MDTypography variant="h6" fullWidth fontWeight="regular" alignContent="center">
            Supermarkets
          </MDTypography>
          <MDTypography variant="h6" fullWidth fontWeight="regular" alignContent="center">
            Liquor shops
          </MDTypography>
        </Stack>
      </Stack>
      <MDButton
        variant="contained"
        size="large"
        fontWeight="regular"
        color="success"
        href="/app/reviews"
        borderRadius={0}
        fullWidth
      >
        Beer I Come!&nbsp;&nbsp;&nbsp;&gt;
      </MDButton>
    </PageLayout>
  );
}

export default Mobile2;
