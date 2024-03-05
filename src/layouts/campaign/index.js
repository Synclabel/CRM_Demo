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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import AppsList from "examples/Lists/AppsList";
import { CardMedia } from "@mui/material";

// Data
import appsListData from "layouts/campaign/data/appsListData";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Mobileimage from "assets/images/mobile_preview_1.png";
import { useNavigate } from "react-router-dom";

//InputContext

function Campaign() {
  const navigate = useNavigate();




  return (
    <DashboardLayout>
      {/*<DashboardNavbar />*/}
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={12}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h2" fontWeight="regular">
                  <span style={{ fontWeight: "bold" }}>Congratulations!</span> your first connected
                  packaging app is ready
                </MDTypography>
              </MDBox>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={5}>
                  <MDBox px={3} py={2}>

                    <AppsList title="Plugins" plugins={appsListData} shadow={false} />

                  </MDBox>
                </Grid>
                <Grid item xs={12} sm={6} lg={2}>
                  <MDBox px={3} py={1}></MDBox>
                </Grid>
                <Grid item xs={12} sm={6} lg={5}>
                  <MDBox px={3} py={0}>
                    <CardMedia sx={{ height: 600 }} image={Mobileimage} title="map" />
                  </MDBox>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} lg={2}>
                  <MDBox p={2} mb="1rem">
                    <MDButton onClick={() => {
                      navigate("/industry");
                    }} m="15px" variant="text" size="small" color="dark">
                      &lt;&nbsp;&nbsp;&nbsp;Back
                    </MDButton>
                  </MDBox>
                </Grid>
                <Grid item xs={12} sm={12} lg={8}>
                  <MDBox p={2} mb="1rem"></MDBox>
                </Grid>
                <Grid item xs={12} sm={12} lg={2}>
                  <MDBox p={2} mb="1rem">
                    <MDButton onClick={() => {
                      navigate("/register");
                    }} m="15px" variant="outlined" size="small" color="dark">
                      Next&nbsp;&nbsp;&nbsp;&gt;
                    </MDButton>
                  </MDBox>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Campaign;
