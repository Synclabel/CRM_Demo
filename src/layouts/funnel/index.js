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

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Wheel from "assets/images/wheel.png";
import { CardMedia, Divider } from "@mui/material";

function Funnel() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  return (
    <DashboardLayout>
      {/*<DashboardNavbar />*/}
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={12}>
            <MDBox px={2}>
              <MDTypography variant="h4">SyncFunnel</MDTypography>
              <MDTypography variant="body" color="text" fontWeight="regular">
                The flywheel is simply a wheel that&#8217;s incredibly energy-efficient. The amount
                of energy it stores depends on how fast it spins, the amount of friction it
                encounters, and its size.
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h4">Supply Chain Mind Mapper</MDTypography>
                <CardMedia component="img" height="600" image={Wheel} alt="label" />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Funnel;
