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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

import React, { useState } from "react";


// @mui material components
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Custom styles for the SidenavCollapse
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
} from "examples/Sidenav/styles/sidenavCollapse";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { Collapse, ListItemButton } from "@mui/material";
import List from "@mui/material/List";
import SideNavNestedButton from "../../components/customComponents/SideNavNestedButton";

function SidenavNested({ icon, name, active, collapseName,innerList, ...rest }) {
  const [controller] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    // console.log(e);
    setOpen(!open);
  };


  return (
    <>
    <ListItem  component="ul" onClick={handleClick} >
      <MDBox variant={'text'}

             {...rest}
             sx={(theme) =>
               collapseItem(theme, {
                 active,
                 transparentSidenav,
                 whiteSidenav,
                 darkMode,
                 sidenavColor,
               })
             }

      >
        {/*<ListItemIcon*/}
        {/*  sx={(theme) =>*/}
        {/*    collapseIconBox(theme, { transparentSidenav, whiteSidenav, darkMode, active })*/}
        {/*  }*/}
        {/*>*/}
        {/*  {typeof icon === "string" ? (*/}
        {/*    <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>*/}
        {/*  ) : (*/}
        {/*    icon*/}
        {/*  )}*/}
        {/*</ListItemIcon>*/}
        <Icon/>

        <ListItemText
          primary={name}
          sx={(theme) =>
            collapseText(theme, {
              miniSidenav,
              transparentSidenav,
              whiteSidenav,
              active,
            })
          }
        />

        {open ? <ExpandLess /> : <ExpandMore />}

      </MDBox>
    </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/*TODO make list.map, throw all nested*/}
          {innerList.map((val)=><SideNavNestedButton name={val.name} icon={val.icon} active={val.key===collapseName} route={val.route} key={val.key}/>)}
        </List>
      </Collapse>

    </>
  );
}

// Setting default values for the props of SidenavNested
SidenavNested.defaultProps = {
  active: false,
};

// Typechecking props for the SidenavNested
SidenavNested.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  innerList: PropTypes.array,
  collapseName:PropTypes.string
};

export default SidenavNested;
