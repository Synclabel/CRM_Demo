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
// import LabelImage from "assets/images/label.png";
import NewLabelImage from "assets/images/new_label_synclabel.png";

import QrImage from "assets/images/qr.png";
import { CardMedia, Divider } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import MDInput from "components/MDInput";

import LogoHp from "assets/images/Logo-HP.svg";
import LogoFujitsu from "assets/images/Logo-Fudjitsu.svg";
import LogoBrother from "assets/images/Logo-Brother-e1600350310290.svg";
import LogoCanon from "assets/images/Logo-Canon-e1600350489883.svg";
import LogoPanasonic from "assets/images/Logo-Panasonic 1.svg";
import LogoEpson from "assets/images/Logo-Epson.svg";
import LogoXerox from "assets/images/Logo-XEROX.svg";
import LogoSamsung from "assets/images/Logo-Samsung.svg";
import PrinterProviders from "layouts/billing/components/PrinterProviders";
import { useNavigate } from "react-router-dom";
import { vendors } from "../../utils/content";
import { labelContext } from "../../context/labelContext";

//


function Printing() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);
  const navigate = useNavigate();
  const { printingInput, setPrintingInput } = useContext(labelContext);
  const [saveBtn, setSaveBtn] = useState(false);


  const [currentVendor, setCurrentVendor] = useState(0);

  const changeVendorHandler = (operator) => {
    switch (operator) {
      case "+":
        setCurrentVendor(currentVendor + 1);
        break;

      case "-":
        setCurrentVendor(currentVendor - 1);
        break;

    }
  };


  const inputChangeHandler = (e) => {
    setPrintingInput(prevState => ({
      ...prevState,
      amount: e.target.value,
    }));
  };

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
                    <MDTypography variant="h5">Add Printers</MDTypography>
                    <MDTypography variant="button" color="text" fontWeight="regular">
                      Choose your vendor:
                    </MDTypography>
                  </MDBox>
                  <Grid container spacing={1} p={1}>

                    {/*{vendors.map((value) =>*/}
                    {/*  <Grid item xs={12} sm={6} lg={3} key={value[1]} sx={{ position: "relative" }}>*/}
                    {/*    <MDBox onClick={()=>logoClickHandle(value[1])} component="img" src={value[0]} border alt="Brand" id={value[1]} />*/}
                    {/*    {printingInput.vendor === value[1] ? <MDBox sx={{*/}
                    {/*      position: "absolute",*/}
                    {/*      left: 53,*/}
                    {/*      top: 25,*/}
                    {/*      background: "red",*/}
                    {/*      width: "3rem",*/}
                    {/*      height: "3rem",*/}
                    {/*    }} /> : <></>}*/}
                    {/*  </Grid>,*/}
                    {/*)}*/}

                    {currentVendor ?
                      <MDButton onClick={() => changeVendorHandler("-")} color={"info"} variant={"text"}
                                sx={{ fontSize: "2rem" }}>{"<"}</MDButton>
                      :
                      <MDButton disabled onClick={() => changeVendorHandler("-")} color={"info"} variant={"text"}
                                sx={{ fontSize: "2rem" }}>{"<"}</MDButton>

                    }
                    <MDBox component={"img"} src={vendors[currentVendor][0]}></MDBox>


                    {currentVendor>=7?
                      <MDButton disabled onClick={() => changeVendorHandler("+")} color={"info"} variant={"text"}
                                sx={{ fontSize: "2rem" }}>{">"}</MDButton>
                      :
                      <MDButton  onClick={() => changeVendorHandler("+")} color={"info"} variant={"text"}
                                sx={{ fontSize: "2rem" }}>{">"}</MDButton>

                    }


                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Card>
                  <MDBox p={2} mb="1rem">
                    <MDTypography variant="h5">Printing Amounts</MDTypography>
                    <br />
                    <MDInput type="number" label="Amount of labels needed" onChange={(e) => {
                      inputChangeHandler(e);
                    }} value={printingInput.amount} />
                    <br />
                    <MDTypography variant="button" color="text" fontWeight="regular">
                      With {printingInput.amount} unique Synclabels
                    </MDTypography>
                    <br />
                    <MDBox px={2}>
                      <MDButton onClick={() => setSaveBtn(prevState => !prevState)}
                                variant={saveBtn ? "contained" : "outlined"} color="info" size="small">
                        {saveBtn ? "Saved" : "Save"}
                      </MDButton>
                    </MDBox>
                  </MDBox>
                </Card>
              </Grid>
              <Grid item xs={12} lg={12}>


                <PrinterProviders currentVendor={currentVendor}/>


              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={7.3}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h5" fontWeight="bold">
                  Print Summary
                </MDTypography>
                <MDTypography variant="body2" color="text" fontWeight="regular">
                  Check out each column for more details
                </MDTypography>
              </MDBox>
              <Grid container spacing={1} py={2}>
                <Grid item xs={12} sm={6} lg={3}>
                  <MDBox p={1} pl={2}>
                    <MDTypography variant="button" fontWeight="bold">
                      Quantity:{"\n"}
                    </MDTypography>
                    <MDTypography variant="button" color="text">
                      {printingInput.amount} labels with unique Synclabels
                    </MDTypography>
                    <MDButton variant="outlined" color="info" size="small" fullWidth>
                      Download QR sheet
                    </MDButton>
                  </MDBox>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <MDBox p={1}>
                    <MDTypography variant="button" fontWeight="bold">
                      Print provider:
                    </MDTypography>
                    <br />
                    <MDTypography variant="button" color="text">
                      {printingInput.provider}
                    </MDTypography>
                    <br />
                    <MDBox component="img" src={vendors[currentVendor][0]} alt="Brand" width={64} />
                  </MDBox>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <MDBox p={1} pr={2}>
                    <MDTypography variant="button" fontWeight="bold">
                      Delivery date:{"\n"}
                    </MDTypography>
                    <MDTypography variant="button" color="text">
                      August 04 2023
                    </MDTypography>
                  </MDBox>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <MDBox p={1} pr={2}>
                    <MDTypography variant="button" fontWeight="bold">
                      Price:{"\n"}
                    </MDTypography>
                    <MDTypography variant="button" color="text">
                      $8990 (Shipping included)
                    </MDTypography>
                  </MDBox>
                </Grid>
              </Grid>
              <Divider orientation="horizontal" />
              <MDBox p={6}>
                <CardMedia component="img" height="150" image={NewLabelImage} alt="label" />
              </MDBox>
              <MDBox px={16} py={1}>
                <MDButton onClick={() => navigate("/activate")} variant="outlined" color="info" fullWidth>
                  Approve and Checkout
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

export default Printing;
