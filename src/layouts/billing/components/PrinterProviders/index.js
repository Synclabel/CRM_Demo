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
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Billing page components
import PrinterProvider from "layouts/billing/components/PrinterProvider";
import { useContext, useState } from "react";
import { labelContext } from "../../../../context/labelContext";
import PropTypes from "prop-types";

//
import { additionalPrintProviders, printProviders } from "../../../../utils/content";

function PrinterProviders({ currentVendor }) {
  const { printingInput, setPrintingInput } = useContext(labelContext);
  const [showMoreProviders, setShowMoreProviders] = useState(false);

  const moreProvidersHandler = () => {
    setShowMoreProviders(prevState => !prevState);
  };

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Select a Printing Provider
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>

          {printProviders.map((val) => <PrinterProvider printingInput={printingInput}
                                                        setPrintingInput={setPrintingInput} key={name} name={val.name}
                                                        vat={val.vat} company={val.company}
                                                        email={val.email} currentVendor={currentVendor}
                                                        active={printingInput.provider === val.name} />)}

          {showMoreProviders ? additionalPrintProviders.map((val) => <PrinterProvider printingInput={printingInput}
                                                                                      setPrintingInput={setPrintingInput}
                                                                                      key={name} name={val.name}
                                                                                      vat={val.vat}
                                                                                      company={val.company}
                                                                                      email={val.email}
                                                                                      currentVendor={currentVendor}
                                                                                      active={printingInput.provider === val.name} />) : <></>}
        </MDBox>
      </MDBox>
      <MDBox px={2}>
        {showMoreProviders ?
          <MDButton onClick={moreProvidersHandler} size="small" variant="text" color="info" fullWidth>
            Show less providers
          </MDButton>
          :
          <MDButton onClick={moreProvidersHandler} size="small" variant="text" color="info" fullWidth>
            Show more providers
          </MDButton>}

      </MDBox>
    </Card>
  );
}

export default PrinterProviders;
PrinterProviders.propTypes = {
  currentVendor: PropTypes.number,
};