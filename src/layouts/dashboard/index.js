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
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
//import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";
import ProductCard from "examples/Cards/BlogCards/ProductCard";

import Luma from "assets/images/luma.png";
import CornerLogo from "assets/images/butterflyvlogo.png";
import BlueLogo from "assets/images/10-cr.png";
import WhiteLogo from "assets/images/whiterfly.png";
import RouteIcon from "../../assets/images/RouteIcon.png";
import LeftImage from "assets/images/leftimage.png";
import RightImage from "assets/images/rightimage.png";
// import QrImage from "assets/images/qr.png";
import NewQrImage from "assets/images/new_qr.png";

import Gamepad from "assets/images/Gamepad.png";
import StarIcon from "../../assets/images/StarIcon.png";
import Wallet from "../../assets/images/Wallet.png";
import AuthIcon from "../../assets/images/AuthIcon.png";
import LocationIcon from "../../assets/images/LocationIcon.png";
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
import appsListData from "../campaign/data/appsListData";
import DashboardPlugInCard from "../../components/customComponents/DashboardPlugInCard";

//Plugins Context
import { useContext} from "react";
import { InputContext } from "../../context/InputContext";
function Printing() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);
  const { pluginsInput, setPluginsInput } = useContext(InputContext);


  const clickPluginHandler = (currentButton) => {
    setPluginsInput(prevState => {
      return { ...prevState, [currentButton]: !prevState[currentButton] }
    });
  }

  return (
    <DashboardLayout>
      {/*<DashboardNavbar />*/}
      <MDBox mt={1} mb={3}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} lg={12}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={2.4} lg={2.4} alignContent="center">
                <Card alignContent="center">
                  <MDBox px={1} py={1} height="12rem" alignContent="center">
                    <MDTypography variant="h6">Carlsberg LUMA</MDTypography>
                    <MDBox
                      component="img"
                      alignSelf="center"
                      src={Luma}
                      height="100px"
                      width="100px"
                      alt="Brand"
                      mx={4.5}
                    />
                    <MDButton variant="outlined" color="info" size="small" fullWidth>
                      Switch product
                    </MDButton>
                  </MDBox>
                </Card>
              </Grid>
              <Grid item xs={12} lg={2.4}>
                <Card>
                  <MDBox px={2} py={1} height="12rem">
                    <MDTypography variant="button">Latest Product Reviews:</MDTypography>
                    <Divider orientation="horizontal" />
                  </MDBox>
                </Card>
              </Grid>
              <Grid item xs={12} lg={2.4}>
                <Card>
                  <MDBox px={2} py={1} height="12rem">
                    <MDTypography variant="button">Recent Print Statistics:</MDTypography>
                    <Divider orientation="horizontal" />
                  </MDBox>
                </Card>
              </Grid>
              <Grid item xs={12} lg={2.4}>
                <Card>
                  <MDBox px={2} py={1} height="12rem">
                    <MDTypography variant="button">Locations:</MDTypography>
                    <Divider orientation="horizontal" />
                  </MDBox>
                </Card>
              </Grid>
              <Grid item xs={12} lg={2.4}>
                <Card>
                  <MDBox px={2} py={1} height="12rem">
                    <MDTypography variant="button">Campaigns:</MDTypography>
                    <Divider orientation="horizontal" />
                  </MDBox>
                </Card>
              </Grid>
              <Grid item xs={2.4} lg={4.65}>
                <Card>
                  <MDBox px={1} py={1} height="17rem" justifyContent="center">
                    <MDBox
                      component="img"
                      justifyContent="center"
                      height="250px"
                      src={LeftImage}
                      alt="Brand"
                    />
                  </MDBox>
                </Card>
              </Grid>
              <Grid item xs={2.4} lg={2.7}>
                <Card>
                  <MDBox px={1} py={1} height="17rem" justifyContent="center">
                    <MDBox
                      component="img"
                      justifyContent="center"
                      height="250px"
                      src={NewQrImage}
                      alt="Brand"
                    />
                  </MDBox>
                </Card>
              </Grid>
              <Grid item xs={2.4} lg={4.65}>
                <Card>
                  <MDBox px={1} py={1} height="17rem" justifyContent="center">
                    <MDBox
                      component="img"
                      justifyContent="center"
                      height="250px"
                      src={RightImage}
                      alt="Brand"
                    />
                  </MDBox>
                </Card>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Card>
                  <MDBox py={0} px={60}>
                    <MDButton variant="text" color="info" size="large">
                      <MDBox
                        component="img"
                        justifyContent="center"
                        height="25px"
                        src={BlueLogo}
                        alt="Brand"
                      />
                      &nbsp;Plugins
                    </MDButton>
                  </MDBox>
                </Card>
              </Grid>

              {appsListData.map((value)=>
                <DashboardPlugInCard
                  changeActiveState={()=>{
                    setPluginsInput(prevState => ({
                      ...prevState,
                      [value.name.toLowerCase()]: !prevState[value.name.toLowerCase()]
                    }))
                  }}
                  isActive={pluginsInput[value.name.toLowerCase()]}
                  key={value.name}
                  text={value.dashboardData.innerText}
                  icon={value.image}
                  route={value.action.route}
                  btnText={"Go to App!"}
                  name={value.name}/>
              )}


              {/*<Grid item xs={12} lg={3}>*/}
              {/*  <Card>*/}
              {/*    <MDBox px={4} py={3} height="13rem">*/}
              {/*      <MDBox*/}
              {/*        component="img"*/}
              {/*        justifyContent="center"*/}
              {/*        height="24px"*/}
              {/*        src={RouteIcon}*/}
              {/*        alt="Brand"*/}
              {/*      />*/}
              {/*      &nbsp;*/}
              {/*      <MDTypography variant="button" fontWeight="bold" height="24px">*/}
              {/*        Traceability*/}
              {/*      </MDTypography>*/}
              {/*      <br />*/}
              {/*      <MDTypography*/}
              {/*        variant="body2"*/}
              {/*        fontWeight="light"*/}
              {/*        p={0}*/}
              {/*        sx={{ lineHeight: 1.5, m: 0, fontSize: 14 }}*/}
              {/*      >*/}
              {/*        Let the consumer know something something something*/}
              {/*      </MDTypography>*/}
              {/*      <br />*/}
              {/*      <MDButton variant="outlined" color="dark" size="small" fullWidth>*/}
              {/*        Activate*/}
              {/*      </MDButton>*/}
              {/*    </MDBox>*/}
              {/*  </Card>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} lg={3}>*/}
              {/*  <Card>*/}
              {/*    <MDBox px={4} py={3} height="13rem">*/}
              {/*      <MDBox*/}
              {/*        component="img"*/}
              {/*        justifyContent="center"*/}
              {/*        width="24px"*/}
              {/*        src={Wallet}*/}
              {/*        alt="Brand"*/}
              {/*      />*/}
              {/*      &nbsp;*/}
              {/*      <MDTypography variant="button" fontWeight="bold" height="24px">*/}
              {/*        Wallet*/}
              {/*      </MDTypography>*/}
              {/*      <br />*/}
              {/*      <MDTypography*/}
              {/*        variant="body2"*/}
              {/*        fontWeight="light"*/}
              {/*        p={0}*/}
              {/*        sx={{ lineHeight: 1.5, m: 0, fontSize: 14 }}*/}
              {/*      >*/}
              {/*        Let the consumer know something something something*/}
              {/*      </MDTypography>*/}
              {/*      <br />*/}
              {/*      <MDButton variant="outlined" color="dark" size="small" fullWidth>*/}
              {/*        Activate*/}
              {/*      </MDButton>*/}
              {/*    </MDBox>*/}
              {/*  </Card>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} lg={3}>*/}
              {/*  <Card>*/}
              {/*    <MDBox px={4} py={3} height="13rem">*/}
              {/*      /!* <MDBox*/}
              {/*        component="img"*/}
              {/*        justifyContent="center"*/}
              {/*        height="24px"*/}
              {/*        src={RouteIcon}*/}
              {/*        alt="Brand"*/}
              {/*      /> *!/*/}
              {/*      <MDBox*/}
              {/*        component="img"*/}
              {/*        justifyContent="center"*/}
              {/*        height="24px"*/}
              {/*        src={LocationIcon}*/}
              {/*        alt="Brand"*/}
              {/*      />*/}
              {/*      &nbsp;*/}
              {/*      <MDTypography variant="button" fontWeight="bold" height="24px">*/}
              {/*        Locations*/}
              {/*      </MDTypography>*/}
              {/*      <br />*/}
              {/*      <MDTypography*/}
              {/*        variant="body2"*/}
              {/*        fontWeight="light"*/}
              {/*        p={0}*/}
              {/*        sx={{ lineHeight: 1.5, m: 0, fontSize: 14 }}*/}
              {/*      >*/}
              {/*        Let the consumer know something something something*/}
              {/*      </MDTypography>*/}
              {/*      <br />*/}
              {/*      <MDButton variant="outlined" color="dark" size="small" fullWidth>*/}
              {/*        Activate*/}
              {/*      </MDButton>*/}
              {/*    </MDBox>*/}
              {/*  </Card>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} lg={3}>*/}
              {/*  <Card>*/}
              {/*    <MDBox px={4} py={3} height="13rem">*/}
              {/*      <MDBox*/}
              {/*        component="img"*/}
              {/*        justifyContent="center"*/}
              {/*        height="24px"*/}
              {/*        src={Gamepad}*/}
              {/*        alt="Brand"*/}
              {/*      />*/}
              {/*      &nbsp;*/}
              {/*      <MDTypography variant="button" fontWeight="bold" height="24px">*/}
              {/*        Gaming*/}
              {/*      </MDTypography>*/}
              {/*      <br />*/}
              {/*      <MDTypography*/}
              {/*        variant="body2"*/}
              {/*        fontWeight="light"*/}
              {/*        p={0}*/}
              {/*        sx={{ lineHeight: 1.5, m: 0, fontSize: 14 }}*/}
              {/*      >*/}
              {/*        Let the consumer know something something something*/}
              {/*      </MDTypography>*/}
              {/*      <br />*/}
              {/*      <MDButton variant="outlined" color="dark" size="small" fullWidth>*/}
              {/*        Activate*/}
              {/*      </MDButton>*/}
              {/*    </MDBox>*/}
              {/*  </Card>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} lg={3}>*/}
              {/*  <Card>*/}
              {/*    <MDBox px={4} py={3} height="13rem">*/}
              {/*      /!* <MDBox*/}
              {/*        component="img"*/}
              {/*        justifyContent="center"*/}
              {/*        height="24px"*/}
              {/*        src={RouteIcon}*/}
              {/*        alt="Brand"*/}
              {/*      /> *!/*/}
              {/*      <Icon>login</Icon>*/}
              {/*      &nbsp;*/}
              {/*      <MDTypography*/}
              {/*        variant="button"*/}
              {/*        fontWeight="bold"*/}
              {/*        height="24px"*/}
              {/*        verticalAlign="middle"*/}
              {/*        gutterBottom="true"*/}
              {/*      >*/}
              {/*        Registration*/}
              {/*      </MDTypography>*/}
              {/*      <br />*/}
              {/*      <MDTypography*/}
              {/*        variant="body2"*/}
              {/*        fontWeight="light"*/}
              {/*        p={0}*/}
              {/*        sx={{ lineHeight: 1.5, m: 0, fontSize: 14 }}*/}
              {/*      >*/}
              {/*        Let the consumer know something something something*/}
              {/*      </MDTypography>*/}
              {/*      <br />*/}
              {/*      <MDButton variant="outlined" color="dark" size="small" fullWidth>*/}
              {/*        Go to App*/}
              {/*      </MDButton>*/}
              {/*    </MDBox>*/}
              {/*  </Card>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} lg={3}>*/}
              {/*  <Card>*/}
              {/*    <MDBox px={4} py={3} height="13rem">*/}
              {/*      <MDBox*/}
              {/*        component="img"*/}
              {/*        justifyContent="center"*/}
              {/*        width="24px"*/}
              {/*        src={AuthIcon}*/}
              {/*        alt="Brand"*/}
              {/*      />*/}
              {/*      &nbsp;*/}
              {/*      <MDTypography variant="button" fontWeight="bold" height="24px">*/}
              {/*        Authentication*/}
              {/*      </MDTypography>*/}
              {/*      <br />*/}
              {/*      <MDTypography*/}
              {/*        variant="body2"*/}
              {/*        fontWeight="light"*/}
              {/*        p={0}*/}
              {/*        sx={{ lineHeight: 1.5, m: 0, fontSize: 14 }}*/}
              {/*      >*/}
              {/*        Let the consumer know something something something*/}
              {/*      </MDTypography>*/}
              {/*      <br />*/}
              {/*      <MDButton variant="outlined" color="dark" size="small" fullWidth>*/}
              {/*        Go to App*/}
              {/*      </MDButton>*/}
              {/*    </MDBox>*/}
              {/*  </Card>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} lg={3}>*/}
              {/*  <Card>*/}
              {/*    <MDBox px={4} py={3} height="13rem">*/}
              {/*      <MDBox*/}
              {/*        component="img"*/}
              {/*        justifyContent="center"*/}
              {/*        height="24px"*/}
              {/*        src={StarIcon}*/}
              {/*        alt="Brand"*/}
              {/*      />*/}
              {/*      &nbsp;*/}
              {/*      <MDTypography variant="button" fontWeight="bold" height="24px">*/}
              {/*        Reviews*/}
              {/*      </MDTypography>*/}
              {/*      <br />*/}
              {/*      <MDTypography*/}
              {/*        variant="body2"*/}
              {/*        fontWeight="light"*/}
              {/*        p={0}*/}
              {/*        sx={{ lineHeight: 1.5, m: 0, fontSize: 14 }}*/}
              {/*      >*/}
              {/*        Let the consumer know something something something*/}
              {/*      </MDTypography>*/}
              {/*      <br />*/}
              {/*      <MDButton variant="outlined" color="dark" size="small" fullWidth>*/}
              {/*        Go to App*/}
              {/*      </MDButton>*/}
              {/*    </MDBox>*/}
              {/*  </Card>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12} lg={3}>*/}
              {/*  <Card sx={{ backgroundColor: "#0cc0df" }}>*/}
              {/*    <MDBox px={4} py={1} height="13rem">*/}
              {/*      <MDBox*/}
              {/*        component="img"*/}
              {/*        justifyContent="center"*/}
              {/*        height="80px"*/}
              {/*        px={7}*/}
              {/*        src={WhiteLogo}*/}
              {/*        alt="Brand"*/}
              {/*      />*/}
              {/*      &nbsp;*/}
              {/*      <MDTypography variant="button" color="white" fontWeight="bold">*/}
              {/*        SyncMarket*/}
              {/*      </MDTypography>*/}
              {/*      <MDTypography*/}
              {/*        variant="body2"*/}
              {/*        fontWeight="light"*/}
              {/*        color="white"*/}
              {/*        p={0}*/}
              {/*        sx={{ lineHeight: 1.5, m: 0, fontSize: 14 }}*/}
              {/*      >*/}
              {/*        Discover new Plugins*/}
              {/*      </MDTypography>*/}
              {/*      <MDButton variant="outlined" color="#0cc0df" size="small" fullWidth>*/}
              {/*        Go to Market*/}
              {/*      </MDButton>*/}
              {/*    </MDBox>*/}
              {/*  </Card>*/}
              {/*</Grid>*/}
            </Grid>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Printing;
