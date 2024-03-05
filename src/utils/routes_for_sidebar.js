import Icon from "@mui/material/Icon";
import Dashboard from "../layouts/dashboard";
import Billing from "../layouts/billing";
import Activate from "../layouts/activate";
import Product from "../layouts/product";
import Labels from "../layouts/labels";
import Printing from "../layouts/printing";
import Traceability from "../layouts/traceability";
import Funnel from "../layouts/funnel";
import Locations from "../layouts/locations";
import Industry from "../layouts/industry";
import Campaign from "../layouts/campaign";
import Register from "../layouts/register";
import Notifications from "../layouts/notifications";
import Profile from "../layouts/profile";
import SignIn from "../layouts/authentication/sign-in";
import SignUp from "../layouts/authentication/sign-up";
import Mobile1 from "../layouts/mobile1";
import Mobile2 from "../layouts/mobile2";
import MobileReviews from "../layouts/mobile_reviews";
import MobileContent from "../layouts/mobile_content";
import MobileRecycle from "../layouts/mobile_recycle";
import QuizIcon from "@mui/icons-material/Quiz";

//icons
import BeenhereIcon from '@mui/icons-material/Beenhere';
import PrintIcon from '@mui/icons-material/Print';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ExtensionIcon from '@mui/icons-material/Extension';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RouteIcon from '@mui/icons-material/Route';

const routes_for_sidebar = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "nested_list",
    name: "Labels",
    key: "labels_nesting",
    icon: <BeenhereIcon fontSize="small"/>,
    innerList: [
      {
        name: "Labels",
        key: "labels",
        icon: <BeenhereIcon fontSize="small"/>,
        route: "/labels",
        component: <Labels />,
      },
      {
        name: "Printing",
        key: "printing",
        icon: <PrintIcon fontSize="small"/>,
        route: "/printing",
        component: <Printing />,
      },
      {
        name: "Activate",
        key: "activate",
        icon: <CheckCircleOutlineIcon fontSize="small"/>,
        route: "/activate",
        component: <Activate />,
      },
    ],
  },

  {
    type: "nested_list",
    name: "Plugins",
    key: "plugins_nesting",
    icon: <ExtensionIcon fontSize="small"/>,
    innerList: [
      {
        name: "Locations",
        key: "locations",
        icon: <LocationOnIcon fontSize="small"/>,
        route: "/locations",
        component: <Locations />,
      },
      {
        name: "Traceability",
        key: "traceability",
        icon: <RouteIcon fontSize="small"/>,
        route: "/traceability",
        component: <Traceability />,
      },
    ],
  }
];

export default routes_for_sidebar;
