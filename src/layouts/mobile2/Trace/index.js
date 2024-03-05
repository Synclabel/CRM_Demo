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
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function Trace() {
  return (
    <Card sx={{ height: "100%" }} shadow="false">
      <MDBox pt={3} px={3}>
        <MDTypography variant="h4" fontWeight="medium">
          Carlsberg LUMA
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography variant="subtitle" color="text" fontWeight="medium">
              It was a way till we got here! we left you only the fun parts - enjoy your beer and
              save the planet
            </MDTypography>
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="light"
          icon="notifications"
          title="Get Rewards and Tokens"
          dateTime="Coming very soon"
        />
        <TimelineItem
          color="light"
          icon="inventory_2"
          title="Recycled"
          dateTime="Yet to come&nbsp;"
        />
        <TimelineItem
          color="success"
          icon="shopping_cart"
          title="Scanned By You"
          dateTime="Tel Aviv, Israel"
        />
        <TimelineItem
          color="success"
          icon="payment"
          title="Bottled  10.03.2023"
          dateTime="California, USA"
        />
        <TimelineItem
          color="success"
          icon="vpn_key"
          title="Brewery  09.03.2023"
          dateTime="California, USA"
          lastItem
        />
        <TimelineItem
          color="success"
          icon="vpn_key"
          title="HOPS 07.03.2023"
          dateTime="Washington D.C, USA"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default Trace;
