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

// Images
import RouteIcon from "../../../assets/images/RouteIcon.png";
import Gamepad from "assets/images/Gamepad.png";
import StarIcon from "../../../assets/images/StarIcon.png";
import Wallet from "../../../assets/images/Wallet.png";
import AuthIcon from "../../../assets/images/AuthIcon.png";
import LocationIcon from "../../../assets/images/LocationIcon.png";
import RegistrationIcon from "../../../assets/images/RegistrationIcon.png";
import PuzzleIcon from "../../../assets/images/PuzzleIcon.png";

export default [
  {
    image: RouteIcon,
    name: "Traceability",
    description: "Powered by",
    dashboardData:{
      innerText: 'Let the consumer know something something something',
    },
    action: {
      type: "internal",
      route: "/traceability",
      color: "info",
      label: "Activate",
    },
  },
  {
    image: Wallet,
    name: "Wallet",
    description: "Powered by",
    dashboardData:{
      innerText: 'Let the consumer know something something something',
    },
    action: {
      type: "internal",
      route: "/dashboard",
      color: "info",
      label: "Activate",
    },
  },
  {
    image: LocationIcon,
    name: "Locations",
    description: "",
    dashboardData:{
      innerText: 'Let the consumer know something something something',
    },
    action: {
      type: "internal",
      route: "/locations",
      color: "info",
      label: "Activate",
    },
  },
  {
    image: Gamepad,
    name: "Gaming",
    description: "",
    dashboardData:{
      innerText: 'Let the consumer know something something something',
    },
    action: {
      type: "internal",
      route: "/dashboard",
      color: "info",
      label: "Activate",
    },
  },
  {
    image: RegistrationIcon,
    name: "Registration",
    description: "",
    dashboardData:{
      innerText: 'Let the consumer know something something something',
    },
    action: {
      type: "internal",
      route: "/dashboard",
      color: "info",
      label: "Activate",
    },
  },
  {
    image: AuthIcon,
    name: "Authentication",
    description: "",
    dashboardData:{
      innerText: 'Let the consumer know something something something',
    },
    action: {
      type: "internal",
      route: "#",
      color: "info",
      label: "Activate",
    },
  },
  {
    image: StarIcon,
    name: "Reviews",
    description: "",
    dashboardData:{
      innerText: 'Let the consumer know something something something',
    },
    action: {
      type: "internal",
      route: "/dashboard",
      color: "info",
      label: "Activate",
    },
  },
  {
    image: PuzzleIcon,
    name: "More Plugins",
    description: "",
    dashboardData:{
      innerText: 'Let the consumer know something something something',
    },
    action: {
      type: "internal",
      route: "/dashboard",
      color: "info",
      label: "Go to Market",
    },
  },
];
