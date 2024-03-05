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

import { useContext, useState } from "react";

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
import LabelImage from "assets/images/label.png";
import NewLabelImage from "assets/images/new_label_synclabel.png";


// import QrImage from "assets/images/qr.png";
import NewQrImage from "assets/images/new_qr.png";

import { CardMedia } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import MDInput from "components/MDInput";

// react-router
import { useNavigate } from "react-router-dom";
import { InputContext } from "../../context/InputContext";
import { labelContext } from "../../context/labelContext";
import FakeUpload from "../../components/customComponents/FakeUpload";
import RotatableImage from "../../components/customComponents/RotateDiv";


function Labels() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);
  const navigate = useNavigate();
  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);



  const { labelsInput, setLabelsInput } = useContext(labelContext);


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
          <Grid item xs={12} lg={4.7}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} lg={12}>
                <Card>
                  <MDBox px={2} py={1}>
                    <MDTypography variant="h5">Select Label Dimensions</MDTypography>
                    <MDTypography variant="button" color="text" fontWeight="regular">
                      Standard sizes:
                    </MDTypography>
                  </MDBox>
                  <Grid container spacing={2} p={1}>
                    <Grid item xs={12} sm={6} lg={3}>
                      <MDButton
                        variant={labelsInput.dimensions === "50X50" ? "contained" : "outlined"}
                        onClick={() => {
                          setLabelsInput(prevState => ({
                            ...prevState,
                            dimensions: "50X50",
                          }));
                        }}
                        color="info">
                        50x50
                      </MDButton>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                      <MDButton
                        variant={labelsInput.dimensions === "10X90" ? "contained" : "outlined"}
                        onClick={() => {
                          setLabelsInput(prevState => ({
                            ...prevState,
                            dimensions: "10X90",
                          }));
                        }}
                        color="info">
                        10X90
                      </MDButton>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                      <MDButton
                        variant={labelsInput.dimensions === "20X60" ? "contained" : "outlined"}
                        onClick={() => {
                          setLabelsInput(prevState => ({
                            ...prevState,
                            dimensions: "20X60",
                          }));
                        }}
                        color="info">
                        20X60
                      </MDButton>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                      <MDButton
                        variant={labelsInput.dimensions === "30X60" ? "contained" : "outlined"}
                        onClick={() => {
                          setLabelsInput(prevState => ({
                            ...prevState,
                            dimensions: "30X60",
                          }));
                        }}
                        color="info">
                        30X60
                      </MDButton>
                    </Grid>
                  </Grid>
                  <MDBox px={12} py={1}>
                    <MDButton fullWidth
                              variant={labelsInput.dimensions === "Custom Size" ? "contained" : "outlined"}
                              onClick={() => {
                                setLabelsInput(prevState => ({
                                  ...prevState,
                                  dimensions: "Custom Size",
                                }));
                              }}
                              color="info">
                      Custom Size
                    </MDButton>
                  </MDBox>
                </Card>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Card>
                  <MDBox p={2} mb="1rem">
                    <MDTypography variant="h5">Upload Graphics</MDTypography>
                    <br />
                    <FakeUpload uploadedFileName={"graphic.svg"} stateSubscriber={labelsInput.graphics}
                                onClickFunc={() => {
                                  setLabelsInput(prevState => ({ ...prevState, graphics: !prevState.graphics }));
                                }} />
                    <br />
                    <MDButton fullWidth onClick={e => {
                      setLabelsInput(prevState => ({ ...prevState, graphics: !prevState.graphics }));
                    }} variant="gradient" color={labelsInput.graphics ? "success" : "info"} size="small">
                      {labelsInput.graphics ? "image.svg" : "No selected file"}
                    </MDButton>
                  </MDBox>
                </Card>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Card>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={6}>
                      <MDBox p={2}>
                        <MDTypography variant="body2" fontWeight="bold">
                          This is the Synclabel for this Campaign
                        </MDTypography>
                        <br />
                        <MDTypography variant="caption" mt={4}>
                          Change Logo
                        </MDTypography>
                        <br />
                        <FakeUpload onClickFunc={()=>{}}  py={'0'}/>
                        {/* <br />
                        <br />
                        <MDButton variant="gradient" color="info" size="small">
                          No selected file
                        </MDButton> */}
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                      <MDBox p={2}>
                        <CardMedia component="img" height="180" image={NewQrImage} alt="qr" />
                      </MDBox>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={7.3}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h4">Label Preview</MDTypography>
                <MDTypography variant="body" color="text" fontWeight="regular">
                  Label size: {labelsInput.dimensions}
                </MDTypography>
              </MDBox>
              <MDBox px={16} py={12}>
                <CardMedia component="img" height="300" image={NewLabelImage} alt="label" />
              </MDBox>
              <MDBox px={16} py={1}>
                <MDButton onClick={() => navigate("/printing")} variant="outlined" color="info" fullWidth>
                  Approve and go to Printing
                </MDButton>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Labels;
