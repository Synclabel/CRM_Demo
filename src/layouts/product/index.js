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
import UploadIcon from "@mui/icons-material/Upload";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";
import ProductCard from "examples/Cards/BlogCards/ProductCard";

import { MuiFileInput } from "mui-file-input";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

//InputContext
import { useContext } from "react";
import { InputContext } from "../../context/InputContext";
import Box from "@mui/material/Box";
import FakeUpload from "../../components/customComponents/FakeUpload";

function Product() {
  const navigate = useNavigate();
  const { productInput, setProductInput } = useContext(InputContext);


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


  return (
    <DashboardLayout>
      {/*<DashboardNavbar />*/}
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={12}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h2" fontWeight="regular">
                  Register Your First Product
                </MDTypography>
              </MDBox>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={6}>
                  <MDBox px={3}>
                    <MDInput variant="standard" value={productInput.name}
                             onChange={e => setProductInput(prevState => ({ ...prevState, name: e.target.value }))}
                             label="Product Name" size="large" fullWidth />
                    <br />
                    <MDInput variant="standard" value={productInput.url}
                             onChange={e => setProductInput(prevState => ({ ...prevState, url: e.target.value }))}
                             label="Product URL" size="large" fullWidth />
                  </MDBox>
                </Grid>
                <Grid item xs={12} sm={6} lg={12}>
                  <MDBox p={2} mb="1rem">
                    <MDTypography variant="h4" fontWeight="regular">
                      Select Category
                    </MDTypography>
                    <Grid container spacing={2} p={2}>
                      <Grid item xs={12} sm={6} lg={4}>
                        <Stack spacing={2}>
                          <FormControl fullWidth size="large">
                            <InputLabel id="demo-simple-select-label" size={"normal"}>Product Type</InputLabel>
                            <Select
                              sx={{ py: "1rem", width: "30%" }}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              // value={10}
                              label="Product Type"
                              value={productInput.type}
                              onChange={e => {
                                // console.log(e);
                                setProductInput(prevState => ({ ...prevState, type: e.target.value }));
                              }}

                            >
                              <MenuItem value={"Beer"}>Beer</MenuItem>
                              <MenuItem value={"Soft Drink"}>Soft Drink</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl fullWidth size="large">
                            <InputLabel id="demo-simple-select-label">Subtype</InputLabel>
                            <Select
                              sx={{ py: "1rem"}}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Subtype"
                              value={productInput.subType}
                              onChange={e => {
                                //console.log(e);
                                setProductInput(prevState => ({ ...prevState, subType: e.target.value }));
                              }}

                            >
                              <MenuItem value={"Lager"}>Lager</MenuItem>
                              <MenuItem value={"IPA"}>IPA</MenuItem>
                              <MenuItem value={"Stout"}>Stout</MenuItem>
                              <MenuItem value={"Parter"}>Porter</MenuItem>
                            </Select>
                          </FormControl>
                          <br />
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={8}>
                        <br />
                      </Grid>
                      <Grid item xs={12} sm={6} lg={4}>
                        <Stack spacing={2} py={3}>
                          {/* <MDButton m="15px" variant="outlined" color="dark" size="small">
                            Select Product Package
                          </MDButton> */}
                          <FormControl fullWidth size="large">
                            <InputLabel id="demo-simple-select-label">Package</InputLabel>
                            <Select
                              sx={{ py: "1rem"}}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Package"
                              value={productInput.package}
                              onChange={e => {
                                //console.log(e);
                                setProductInput(prevState => ({ ...prevState, package: e.target.value }));
                              }}
                            >
                              <MenuItem value={"Single bottle"}>Single bottle</MenuItem>
                              <MenuItem value={"6-pack"}>6-pack</MenuItem>
                            </Select>
                          </FormControl>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={4}>
                        <Stack spacing={2} py={3}>
                          {/* <MDButton m="15px" variant="outlined" color="dark" size="small">
                            Labeling
                          </MDButton> */}
                          <FormControl fullWidth size="large">
                            <InputLabel id="demo-simple-select-label">Labeling</InputLabel>
                            <Select
                              sx={{ py: "1rem"}}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Labeling"
                              value={productInput.labeling}
                              onChange={e => {
                                //console.log(e);
                                setProductInput(prevState => ({ ...prevState, labeling: e.target.value }));
                              }}
                            >
                              <MenuItem value={"Rectangular"}>Rectangular</MenuItem>
                              <MenuItem value={"Die-cut"}>Die-cut</MenuItem>
                            </Select>
                          </FormControl>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={4}>
                        <Stack spacing={2} py={3}>
                          {/* <MDButton m="15px" variant="outlined" color="dark" size="small">
                            Labeling Process
                          </MDButton> */}
                          <FormControl fullWidth size="large">
                            <InputLabel id="demo-simple-select-label">Labeling Process</InputLabel>
                            <Select
                              sx={{ py: "1rem"}}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Labeling Process"
                              value={productInput.labelingProcess}
                              onChange={e => {
                                //console.log(e);
                                setProductInput(prevState => ({ ...prevState, labelingProcess: e.target.value }));
                              }}


                            >
                              <MenuItem value={"Thermal"}>Thermal</MenuItem>
                              <MenuItem value={"Wet glue"}>Wet glue</MenuItem>
                            </Select>
                          </FormControl>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={4}>
                        <Stack spacing={2} py={3}>
                          {/* <MDButton m="15px" variant="outlined" color="dark" size="small">
                            Distribution Channel
                          </MDButton> */}
                          <FormControl fullWidth size="large">
                            <InputLabel id="demo-simple-select-label">
                              Distribution Channel
                            </InputLabel>
                            <Select
                              sx={{ py: "1rem"}}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Distribution Channel"
                              value={productInput.distributionChannel}
                              onChange={e => {
                                //console.log(e);
                                setProductInput(prevState => ({ ...prevState, distributionChannel: e.target.value }));
                              }}
                            >
                              <MenuItem value={"B2B Distribution"}>B2B Distribution</MenuItem>
                              <MenuItem value={"SaaS Distribution"}>SaaS Distribution</MenuItem>

                            </Select>
                          </FormControl>
                          <FormControl fullWidth size="large">
                            <InputLabel id="demo-simple-select-label">Distributors</InputLabel>
                            <Select
                              sx={{ py: "1rem"}}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Distributors"
                              value={productInput.distributors}
                              onChange={e => {
                                //console.log(e);
                                setProductInput(prevState => ({ ...prevState, distributors: e.target.value }));
                              }}
                            >
                              <MenuItem value={"Kiosks"}>Kiosks</MenuItem>
                              <MenuItem value={"Supermarkets"}>Supermarkets</MenuItem>
                              <MenuItem value={"Bars and Pubs"}>Bars and Pubs</MenuItem>
                            </Select>
                          </FormControl>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={8}>
                        <br />
                      </Grid>
                      <Grid item xs={12} lg={4.5}>
                        <MDBox display={"flex"} flexDirection={"column"} alignItems={"center"} py={2} mb="1rem">
                          <MDTypography variant="h4" fontWeight="regular">
                            Add Product Documentation
                          </MDTypography>
                          <br />
                          <FakeUpload uploadedFileName={"document.pdf"} stateSubscriber={productInput.documentation}
                                      onClickFunc={() => setProductInput(prevState => ({
                                        ...prevState,
                                        documentation: !prevState.documentation,
                                      }))} />
                          <br />
                          <MDButton onClick={e => {
                            setProductInput(prevState => ({ ...prevState, documentation: !prevState.documentation }));
                          }} variant="gradient" color={productInput.documentation ? "success" : "info"} size="small">
                            {productInput.documentation ? "document.pdf" : "No selected file"}
                          </MDButton>
                        </MDBox>
                      </Grid>
                      <Grid item xs={12} lg={4.5}>
                        <MDBox display={"flex"} flexDirection={"column"} alignItems={"center"} py={2} mb="1rem">
                          <MDTypography variant="h4" fontWeight="regular">
                            Add Product Media
                          </MDTypography>
                          <br />
                          <FakeUpload uploadedFileName={"image.svg"} stateSubscriber={productInput.media}
                                      onClickFunc={() => setProductInput(prevState => ({
                                        ...prevState,
                                        media: !prevState.media,
                                      }))} />
                          <br />
                          <MDButton onClick={e => {
                            setProductInput(prevState => ({ ...prevState, media: !prevState.media }));
                          }} variant="gradient" color={productInput.media ? "success" : "info"} size="small">
                            {productInput.media ? "image.svg" : "No selected file"}
                          </MDButton>
                        </MDBox>
                      </Grid>
                    </Grid>
                  </MDBox>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} lg={12} p="10">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} lg={2}>
                    <MDBox p={2} mb="1rem">
                      <MDButton onClick={() => {
                        navigate("/register");
                      }} m="15px" variant="text" size="small" color="dark">
                        &lt;&nbsp;&nbsp;&nbsp;Back
                      </MDButton>
                    </MDBox>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={7}>
                    <MDBox p={2} mb="1rem"></MDBox>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={3}>
                    <MDBox p={2} mb="1rem">
                      <MDButton onClick={() => {
                        navigate("/dashboard");
                      }} m="15px" variant="outlined" size="small" color="dark">
                        Go To Dashboard&nbsp;&nbsp;&nbsp;&gt;
                      </MDButton>
                    </MDBox>
                  </Grid>
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

export default Product;
