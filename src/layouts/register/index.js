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
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDAvatar from "components/MDAvatar";
import AddIcon from "assets/images/adddd.png";

//react-router
import { useNavigate } from "react-router-dom";

//InputContext
import { useContext } from "react";
import { InputContext } from "../../context/InputContext";

//logo
import CarlsbergLogo from "../../assets/images/logos/1200px-Carlsberg_Group_logo.png"


function Register() {
  const navigate = useNavigate();
  const { registerInput, setRegisterInput } = useContext(InputContext);


  return (
    <DashboardLayout>
      {/*<DashboardNavbar />*/}
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={12}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h1">Register Your Account</MDTypography>
              </MDBox>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={12}>
                  <MDBox p={3}>
                    <MDTypography variant="subtitle">Add Company Logo</MDTypography>
                    <br />
                    <MDTypography variant="button">Use SVG format</MDTypography>
                    <MDAvatar sx={{cursor:'pointer'}} src={registerInput.logo?CarlsbergLogo:AddIcon}
                              onClick={(e) => {
                                setRegisterInput((prevState) => ({
                                  ...prevState,
                                  logo: !registerInput.logo,
                                }));
                              }}

                              alt="something here" size="xl" shadow="sm" />
                  </MDBox>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <MDBox p={3} px={6}>
                    <MDInput value={registerInput.name} onChange={(e) => {
                      setRegisterInput((prevState) => ({
                        ...prevState,
                        name: e.target.value,
                      }));
                    }} variant="standard" label="Company Name" size="large" fullWidth />
                    <br />
                    <br />
                    <MDInput value={registerInput.phone} onChange={(e) => {
                      setRegisterInput((prevState) => ({
                        ...prevState,
                        phone: e.target.value,
                      }));
                    }} variant="standard" label="Contact Phone" size="large"
                             fullWidth />
                    <br />
                    <br />
                    <MDInput value={registerInput.email} onChange={(e) => {
                      setRegisterInput((prevState) => ({
                        ...prevState,
                        email: e.target.value,
                      }));
                    }} variant="standard" label="Contact Email" size="large"
                             fullWidth />
                  </MDBox>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <MDBox p={3} px={6}>
                    <MDInput value={registerInput.zip} onChange={(e) => {
                      setRegisterInput((prevState) => ({
                        ...prevState,
                        zip: e.target.value,
                      }));
                    }} variant="standard" label="Company Zipcode" size="large"
                             fullWidth />
                    <br />
                    <br />
                    <MDInput value={registerInput.adress} onChange={(e) => {
                      setRegisterInput((prevState) => ({
                        ...prevState,
                        adress: e.target.value,
                      }));
                    }} variant="standard" label="Contact Address" size="large"
                             fullWidth />
                    <br />
                    <br />
                    <MDInput value={registerInput.website} onChange={(e) => {
                      setRegisterInput((prevState) => ({
                        ...prevState,
                        website: e.target.value,
                      }));
                    }} variant="standard" label="Contact Website" size="large"
                             fullWidth />
                  </MDBox>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} lg={2}>
                  <MDBox p={2} mb="1rem">
                    <MDButton onClick={() => {
                      navigate("/campaign");
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
                      navigate("/product");
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

export default Register;
