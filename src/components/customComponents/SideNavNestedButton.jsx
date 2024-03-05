import React from "react";
import ListItem from "@mui/material/ListItem";
import MDBox from "../MDBox";
import {
  nestedIcon,
  nestedIconBox,
  nestedItem,
  nestedText,
} from "./customStyles/sidenavNested";
import ListItemIcon from "@mui/material/ListItemIcon";
import Icon from "@mui/material/Icon";
import ListItemText from "@mui/material/ListItemText";
import { useMaterialUIController } from "../../context";
import PropTypes from "prop-types";
import { Navigate, useNavigate } from "react-router-dom";

const SideNavNestedButton = ({ icon, name, active, route, ...rest }) => {
  const [controller] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const navigate = useNavigate()

  return (
      <ListItem component="li" onClick={()=>navigate(route)}>
        <MDBox variant={"text"}
               {...rest}
               sx={(theme) =>
                 nestedItem(theme, {
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
          {/*    nestedIconBox(theme, { transparentSidenav, whiteSidenav, darkMode, active })*/}
          {/*  }*/}
          {/*>*/}
          {/*  /!*{typeof icon === "string" ? (*!/*/}
          {/*  /!*  <Icon sx={(theme) => nestedIcon(theme, { active })}>{icon}</Icon>*!/*/}
          {/*  /!*) : (*!/*/}
          {/*  /!*  icon*!/*/}
          {/*  /!*)}*!/*/}
          {/*  <Icon sx={{ fontSize: "15px" }}>{icon}</Icon>*/}

          {/*</ListItemIcon>*/}
          <Icon/>

          <ListItemText
            primary={name}
            sx={(theme) =>
              nestedText(theme, {
                miniSidenav,
                transparentSidenav,
                whiteSidenav,
                active,
              })
            }
          />
        </MDBox>
      </ListItem>
  );
};

export default SideNavNestedButton;


// Typechecking props for the SidenavNested
SideNavNestedButton.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string,
  active: PropTypes.bool,
};