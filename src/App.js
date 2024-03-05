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

import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Material Dashboard 2 React routes
import routes from "./utils/routes";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brandWhite from "assets/images/10-cr.png";
import brandDark from "assets/images/10-cr.png";
import routes_for_sidebar from "./utils/routes_for_sidebar";
import ToDashBoardKeyUpWrapper from "./components/customComponents/ToDashBoardKeyUpWrapper";
//HERE IT IS


//Input state context:
import { InputContext } from "./context/InputContext";
import { labelContext } from "./context/labelContext";

//custom images
import sideNavImage from "./assets/images/illustrations/sidebar_background_image.png";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  //States of the all buttons in onboarding
  //  "/industry":
  const [industryInput, setIndustryInput] =
    useState({ description: "null", industry: "Not selected", size: "Not selected" });

  //  "/campaign": state will be called plugins, because you can activate it also from dashboard
  const [pluginsInput, setPluginsInput] =
    useState({
      traceability: false, wallet: false,
      gaming: false, registration: false, authentication: false, reviews: false,
    });

  //  "/register": in logo used boolean, because it's only simulated input
  const [registerInput, setRegisterInput] =
    useState({
      logo: false, name: "",
      zip: "", phone: "", adress: "", email: "", website: "",
    });

  //  "/product": in documentation and media used boolean, because it's only simulated input
  const [productInput, setProductInput] =
    useState({
      name: "", url: "",
      type: "Beer", subType: "Lager", package: "Single bottle", labeling: "Die-cut", labelingProcess: "Wet glue",
      distributors: "Supermarkets", distributionChannel: "B2B Distribution", documentation: false, media: false,
    });

////Next goes states of 3 pages of labels

//  "/labels"
  const [labelsInput, setLabelsInput] = useState(
    {
      dimensions:'Not Selected',
      graphics: false,
      logo: true,
    },
  );

//  "/printing"
  const [printingInput, setPrintingInput] = useState(
    {
      vendor: "LogoBrother",
      amount: 1000000,
      provider: 'Not Selected',
    },
  );


  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="Synclabel"
              routes={routes_for_sidebar}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {/* {configsButton} */}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/industry" />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  ) : (


    <labelContext.Provider value={{ labelsInput, setLabelsInput, printingInput, setPrintingInput }}>
      <InputContext.Provider value={{
        productInput,
        setProductInput,
        industryInput,
        setIndustryInput,
        pluginsInput,
        setPluginsInput,
        registerInput,
        setRegisterInput,
      }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {layout === "dashboard" && (
            <>
              <Sidenav
                color={sidenavColor}
                brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
                brandName="Synbel"
                routes={routes_for_sidebar}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              />
              <Configurator />
              {/*{configsButton}*/}
            </>
          )}
          {layout === "vr" && <Configurator />}
          <ToDashBoardKeyUpWrapper>
            <Routes>
              {getRoutes(routes)}
              {/*Changed dashboard to industry, so now starting page is industry*/}
              <Route path="*" element={<Navigate to="/industry" />} />
            </Routes>
          </ToDashBoardKeyUpWrapper>
        </ThemeProvider>
      </InputContext.Provider>
    </labelContext.Provider>
  );
}
