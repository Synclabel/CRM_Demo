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

import { useEffect, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";
import RawMatIcon from "../../assets/images/RawMatIcon.png";
import ProcessorIcon from "../../assets/images/ProccesorIcon.png";
import ManufacturingIcon from "../../assets/images/ManufacturingIcon.png";
import RetailerIcon from "../../assets/images/RetailerIcon.png";
import FoodIcon from "../../assets/images/FoodIcon.png";
import SportIcon from "../../assets/images/SportIcon.png";
import FashionIcon from "../../assets/images/FashionIcon.png";
import ElectronicsIcon from "../../assets/images/ElectronicsIcon.png";
import OtherIcon from "../../assets/images/OtherIcon.png";
import SmallIcon from "../../assets/images/SmallIcon.png";
import MediumIcon from "../../assets/images/MediumIcon";
import BigIcon from "../../assets/images/BigIcon.png";
import { useNavigate } from "react-router-dom";

//InputContext
import { useContext } from "react";
import { InputContext } from "../../context/InputContext";
import { industryContent } from "../../utils/content";
import IndustryButton from "../../components/customComponents/IndustryButton";
import IndustryButtonList from "../../components/customComponents/IndustryButtonList";

function Industry() {
  const navigate = useNavigate();
  const { industryInput, setIndustryInput } = useContext(InputContext);


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
  const descriptionHandler = (id) => {
    setIndustryInput(prevState => ({ ...prevState, description: id }));
  };
  const industryHandler = (id) => {
    setIndustryInput(prevState => ({ ...prevState, industry: id }));
  };
  const sizeHandler = (id) => {
    setIndustryInput(prevState => ({ ...prevState, size: id }));
  };

  const [descriptionFlag, setDescriptionFlag] = useState(true);//is this first time when description is rendered?
  const [industryFlag, setIndustryFlag] = useState(true);
  const [sizeFlag, setSizeFlag] = useState(true);


  useEffect(() => {
  }, [descriptionFlag]);


  useEffect(() => {
  }, [industryFlag]);


  useEffect(() => {
  }, [sizeFlag]);


  return (
    <DashboardLayout>
      {/*<DashboardNavbar />*/}
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={12}>
            <Card>
              <MDBox p={3}>
                <MDTypography variant="h3" fontWeight="regular">
                  Choose Your Industry
                </MDTypography>
              </MDBox>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={12}>
                  <MDBox px={3} py={1}>
                    <MDTypography variant="h4" fontWeight="regular">
                      Select the Right Description
                    </MDTypography>
                  </MDBox>
                </Grid>
                {/*Before rendering list, here was a lot of snippets like this, now this code
                 is fractured in IndustryButton.jsx and rendered with map:
                 <Grid item xs={12} sm={12} lg={3.2}>
                  <MDBox p={2}>
                    <MDButton variant="text" color="dark" size="small">
                      <MDBox
                        component="img"
                        justifyContent="center"
                        height="25px"
                        src={ManufacturingIcon}
                        alt="Brand"
                      />
                      &nbsp;Manufacturing Brand
                    </MDButton>
                  </MDBox>
                </Grid>
                */}



                {industryContent.description.map((value, i) =>
                  <IndustryButton enabled={industryInput.description !== i+'description'}  onclickFunc={descriptionHandler} xs={value.xs} sm={value.sm} lg={value.lg} key={i} id={i + "description"}
                                  icon={value.icon}>{value.text}</IndustryButton>)}



                {/*////////////////////*/}
                {/*<IndustryButtonList onClickFun={descriptionHandler} idNaming={'description'}/>*/}
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={12}>
                  <MDBox px={3} py={1}>
                    <MDTypography variant="h4" fontWeight="regular">
                      Select Industry
                    </MDTypography>
                  </MDBox>
                </Grid>


                {industryContent.industry.map((value, i) =>
                  <IndustryButton enabled={industryInput.industry !== i+'industry'}  onclickFunc={industryHandler} xs={value.xs} sm={value.sm} lg={value.lg} key={i} id={i + "industry"}
                                  icon={value.icon}>{value.text}</IndustryButton>)}
                {/*TODO Проверить в main branch изменялась ли height и width*/}
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={12}>
                  <MDBox px={3} py={1}>
                    <MDTypography variant="h4" fontWeight="regular">
                      Company Size
                    </MDTypography>
                  </MDBox>
                </Grid>

                {industryContent.size.map((value, i) =>
                  <IndustryButton enabled={industryInput.size !== i+'size'}  onclickFunc={sizeHandler} xs={value.xs} sm={value.sm} lg={value.lg} key={i} id={i + "size"}
                                  icon={value.icon}>{value.text}</IndustryButton>)}
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} lg={10}>
                  <MDBox p={2} mb="1rem"></MDBox>
                </Grid>
                <Grid item xs={12} sm={12} lg={2}>
                  <MDBox p={2} mb="1rem">
                    <MDButton onClick={() => {
                      navigate("/campaign");
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

export default Industry;
