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
import Footer from "examples/Footer";
// import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";
import ProductCard from "examples/Cards/BlogCards/ProductCard";

import Luma from "assets/images/luma.png";
// import LabelImage from "assets/images/label.png";
import NewLabelImage from "assets/images/new_label_synclabel.png";

import { CardMedia, Divider, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Activate() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const [batchActive, setBatchActive] = useState(false)




  const alertContent = (name) => (
    <MDTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </MDTypography>
      . Give it a click if you like.
    </MDTypography>
  );

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <MDSnackbar
      icon="notifications"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <MDSnackbar
      color="warning"
      icon="star"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
      {/*<DashboardNavbar />*/}
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={2}>
            <Card>
              <MDBox p={2} mb="1rem">
                <MDTypography variant="body">Product:</MDTypography>
              </MDBox>
              <ProductCard
                image={Luma}
                title="LUMA"
                description=""
                action={{
                  type: "internal",
                  route: "/somewhere",
                  color: "info",
                  label: "Go Somewhere",
                }}
              />
              {/* <MDBox pt={2} px={2}>
                <MDAlert color="primary" dismissible>
                  {alertContent("primary")}
                </MDAlert>
              </MDBox> */}
            </Card>
          </Grid>

          <Grid item xs={12} lg={10}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h4">Activate Synclabel Batch</MDTypography>
                <MDTypography variant="body" color="text" fontWeight="regular">
                  We are happy to announce the batch has been printed and ready for activation! Here
                  is a quick reminder about what we have in this order:
                </MDTypography>
              </MDBox>
              <MDBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDBox p={2}>
                      <MDTypography variant="button" fontWeight="bold">
                        Quantity:{"\n"}
                      </MDTypography>
                      <MDTypography variant="button" color="text">
                        200,000 labels with unique Synclabels
                      </MDTypography>
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDBox p={2}>
                      <MDTypography variant="button" fontWeight="bold">
                        Delivery date:{"\n"}
                      </MDTypography>
                      <MDTypography variant="button" color="text">
                        August 04 2023
                      </MDTypography>
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDBox p={2}>
                      <MDTypography variant="button" fontWeight="bold">
                        Label Design:{"\n"}
                      </MDTypography>
                      <CardMedia component="img" height="144" image={NewLabelImage} alt="label" />
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <MDButton variant="text" color="info" onClick={openErrorSB} fullWidth>
                      Download QR sheet
                    </MDButton>
                  </Grid>
                </Grid>


                {batchActive?
                  <>
                  <MDButton variant="gradient" color="success" onClick={openWarningSB} fullWidth>
                    Batch Active
                </MDButton>
                    <Divider />
                    <MDButton onClick={()=>setBatchActive(false)} variant="gradient" color="warning" fullWidth>
                      Deactivate Batch
                    </MDButton>
                  </>
                  :
                    <MDButton variant="gradient" color="info" onClick={()=>setBatchActive(true)} fullWidth>
                     Activate Batch
                    </MDButton>
                }
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}

    </DashboardLayout>
  );
}

export default Activate;
