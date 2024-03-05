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

import { useEffect } from "react";

// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import LogoutIcon from "@mui/icons-material/Logout";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";


// Custom styles for the Sidenav
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "context";

//Logos and Images
import SynclabelLogo from "../../assets/images/logos/SynclabelLogo.png";
import NewSynclabelLogoWithlabel from "../../assets/images/logos/new_new_logo_sync.png";
import CarlsBergSVG from "../../assets/images/logos/CarlsBergSVG.svg";
import RocketMan from "../../assets/images/illustrations/RocketMan.png";
import SidenavNested from "./SidenavNested";


function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");
//
//
  const notRender = ["/industry", "/campaign", "/register", "/product"];
  const shouldNotRender = notRender.includes(location.pathname);


  let textColor = "dark";

  // if (transparentSidenav || (whiteSidenav && !darkMode)) {
  //   textColor = "dark";
  // } else if (whiteSidenav && darkMode) {
  //   textColor = "inherit";
  // }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.

    //Now it's go to mini version at onboarding, and
    // I comment marginLeft at src/examples/LayoutContainers/DashboardLayout/index.js,
    // because it was blocking sidenav to fully close
    // at onboarding

    function handleMiniSidenav() {
      setMiniSidenav(dispatch, (window.innerWidth < 1200 || shouldNotRender));
      setTransparentSidenav(dispatch, (window.innerWidth < 1200 || shouldNotRender) ? false : transparentSidenav);
      setWhiteSidenav(dispatch, (window.innerWidth < 1200 || shouldNotRender) ? false : whiteSidenav);
    }


    /**
     The event listener that's calling the handleMiniSidenav function when resizing the window.
     */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();


    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  // Render all the routes from the routes_for_sidebar.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ type, name, icon, title, innerList, noCollapse, key, href, route }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <NavLink key={key} to={route}>
          <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
        </NavLink>
      );
    } else if (type === "title") {
      returnValue = (
        <MDTypography
          key={key}
          color={textColor}
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          pl={3}
          mt={2}
          mb={1}
          ml={1}
        >
          {title}
        </MDTypography>
      );
    } else if (type === "divider") {
      returnValue = (
        <Divider
          key={key}
          light={
            (!darkMode && !whiteSidenav && !transparentSidenav) ||
            (darkMode && !transparentSidenav && whiteSidenav)
          }
        />
      );
    } else if (type === "nested_list") {
      returnValue = (
          <SidenavNested key={key} name={name} icon={icon} collapseName={collapseName} active={key === collapseName} innerList={innerList}/>
        // <Link
        //   href={href}
        //   key={key}
        //   target="_blank"
        //   rel="noreferrer"
        //   sx={{ textDecoration: "none" }}
        // >
        //   <SidenavCollapse
        //     name={name}
        //     icon={icon}
        //     active={key === collapseName}
        //     noCollapse={noCollapse}
        //   />
        // </Link>
      );
    }

    return returnValue;
  });

  return (

    <SidenavRoot
      sx={shouldNotRender ? { display: "none" } : {/*alignItems:'center'*/ }}
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >

      <MDBox pt={0} pb={1} px={4} textAlign="center">
        {/*<MDBox*/}
        {/*  display={{ xs: "block", xl: "none" }}*/}
        {/*  position="absolute"*/}
        {/*  top={0}*/}
        {/*  right={0}*/}
        {/*  p={1.625}*/}
        {/*  onClick={closeSidenav}*/}
        {/*  sx={{ cursor: "pointer" }}*/}
        {/*>*/}
        {/*  <MDTypography variant="h6" color="secondary">*/}
        {/*    <Icon sx={{ fontWeight: "bold" }}>close</Icon>*/}
        {/*  </MDTypography>*/}
        {/*</MDBox>*/}
        {/*Close sidenav*/}


        <MDBox component={NavLink} to="/dashboard" display="flex" flexDirection="column" alignItems="center">
          {NewSynclabelLogoWithlabel && <MDBox component="img" src={NewSynclabelLogoWithlabel} alt="Brand"
                                               mt={8}
                                               mb={2}

                                               width="10rem"
                                                />}
          <MDBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >

            {/*<MDTypography component="h5" variant="h5" fontWeight="regular" color={textColor}>*/}
            {/*  {brandName}*/}
            {/*</MDTypography>*/}
          </MDBox>
          <MDBox component="img" src={CarlsBergSVG} pt={2} pb={2} alt="Brand" width="5rem" />
        </MDBox>
        {/*Logo + Brandname*/}
      </MDBox>
      {/*grid wrapper for Logo +Brandname*/}


      {/*<Divider*/}
      {/*  light={*/}
      {/*    (!darkMode && !whiteSidenav && !transparentSidenav) ||*/}
      {/*    (darkMode && !transparentSidenav && whiteSidenav)*/}
      {/*  }*/}
      {/*/>*/}


      <List>{renderRoutes}</List>


      <Card sx={{ width: "90%", marginLeft: "auto", marginRight: "auto", marginTop: "auto", position: "relative" }}>
        <CardContent sx={{ paddingLeft: "0.5rem" }}>
          <MDTypography fontWeight={"medium"} sx={{ fontSize: "1.5rem" }} style={{ whiteSpace: "pre-wrap" }}>
            New feature
          </MDTypography>
          <MDTypography fontWeight={"bold"} sx={{ fontSize: "1.3rem" }} style={{ whiteSpace: "pre-wrap" }}>
            Metaverse
            Gaming
          </MDTypography>


          <MDTypography sx={{ fontSize: "1rem", color: "grey" }} style={{ whiteSpace: "pre-wrap" }}>
            New way to let people feel your product
          </MDTypography>
          <br />
        </CardContent>
        <MDBox component={"img"} src={RocketMan} sx={{
          position: "absolute",
          top: "175px",
          left: "9px",
        }} />
      </Card>


      <MDBox variant={"text"} pl={1} pr={3} mt="auto" display={"flex"}
             sx={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <MDButton
          rel="noreferrer"
          variant="text"
          color={"dark"}
        >
          Logout
        </MDButton>
        <LogoutIcon />


      </MDBox>
    </SidenavRoot>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
