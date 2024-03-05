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
import LocationsList from "examples/Lists/LocationsList";

// Data
import locationsListData from "layouts/locations/data/locationsListData";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";
import ProductCard from "examples/Cards/BlogCards/ProductCard";

import Luma from "assets/images/luma.png";
import LabelImage from "assets/images/label.png";
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
import MapImage from "assets/images/map.png";
import PrinterProviders from "layouts/billing/components/PrinterProviders";
import FakeUpload from "../../components/customComponents/FakeUpload";

function Locations() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const [newLocation, setNewLocation] = useState(false);
  const [addLocation, setAddLocation] = useState(false);

  const addLocateFunc = () => {
    setNewLocation(prevState => !prevState);
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
                  <MDBox p={2} mb="1rem">
                    <MDTypography variant="h5">Upload Locations</MDTypography>
                    <br />
                    <FakeUpload uploadedFileName={"locations.pdf"} stateSubscriber={newLocation}
                                onClickFunc={addLocateFunc} />
                    <br />
                    <br />
                    <MDButton variant="gradient" color={newLocation ? "success" : "info"}
                              size="small">
                      {newLocation ? "locations.pdf" : "No selected file"}
                    </MDButton>
                    <MDButton onClick={()=>setAddLocation(prevState => true)} disabled={!newLocation} variant={newLocation?"outlined":'text'} color="info"
                              size="small">
                      Upload Location
                    </MDButton>
                  </MDBox>
                </Card>
              </Grid>
              <Grid item xs={12} lg={12}>
                <LocationsList title="Locations" locations={locationsListData} addLocation={addLocation} shadow={false} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={7.3}>
            <CardMedia sx={{ height: 600 }} image={MapImage} title="map" />
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Locations;
