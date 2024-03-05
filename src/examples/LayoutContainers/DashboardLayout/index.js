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
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React context
import { useMaterialUIController, setLayout } from "context";

function DashboardLayout({ children }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  const notRender = ["/industry", "/campaign", '/register','/product']
  const shouldNotRender = notRender.includes(location.pathname);
  // I really hope that it will be used only as demo, because it's impossible to support. There is no
  // normal documentation, and everything that I change is inline styles and specific cases.


  return (
    <MDBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => (
        shouldNotRender?
          {
            p: 3,
            position: "relative",
            // I comment marginLeft at src/examples/LayoutContainers/DashboardLayout/index.js,
            // because it was blocking sidenav to fully close
            // at onboarding
            [breakpoints.up("xl")]: {
              // marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
              transition: transitions.create(["margin-left", "margin-right"], {
                easing: transitions.easing.easeInOut,
                duration: transitions.duration.standard,
              }),
            },
          }

          :

        {
        p: 3,
        position: "relative",
        // I comment marginLeft at src/examples/LayoutContainers/DashboardLayout/index.js,
        // because it was blocking sidenav to fully close
        // at onboarding
        [breakpoints.up("xl")]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      }



      )}
    >
      {children}
    </MDBox>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
