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

/**
 All of the routes for the Material Dashboard 2 React are added here,
 You can add a new route, customize the routes and delete the routes here.

 Once you add a new route on this file it will be visible automatically on
 the Sidenav.

 For adding a new route you can follow the existing routes in the routes array.
 1. The `type` key with the `collapse` value is used for a route.
 2. The `type` key with the `title` value is used for a title inside the Sidenav.
 3. The `type` key with the `divider` value is used for a divider between Sidenav items.
 4. The `name` key is used for the name of the route on the Sidenav.
 5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
 6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
 7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
 inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
 8. The `route` key is used to store the route location which is used for the react router.
 9. The `href` key is used to store the external links location.
 10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
 10. The `component` key is used to store the component of its route.
 */

// Material Dashboard 2 React layouts
import Dashboard from "../layouts/dashboard";
import Billing from "../layouts/billing";
import Activate from "../layouts/activate";
import Labels from "../layouts/labels";
import Printing from "../layouts/printing";
import Product from "../layouts/product";
import Funnel from "../layouts/funnel";
import Locations from "../layouts/locations";
import Industry from "../layouts/industry";
import Register from "../layouts/register";
import Campaign from "../layouts/campaign";
import Mobile1 from "../layouts/mobile1";
import Mobile2 from "../layouts/mobile2";
import MobileReviews from "../layouts/mobile_reviews";
import MobileContent from "../layouts/mobile_content";
import MobileRecycle from "../layouts/mobile_recycle";
import Traceability from "../layouts/traceability";
import Notifications from "../layouts/notifications";
import Profile from "../layouts/profile";
import SignIn from "../layouts/authentication/sign-in";
import SignUp from "../layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
    {
        type: "collapse",
        name: "Dashboard",
        key: "dashboard",
        icon: <Icon fontSize="small">dashboard</Icon>,
        route: "/dashboard",
        component: <Dashboard/>,
    },
    // {
    //   type: "collapse",
    //   name: "Tables",
    //   key: "tables",
    //   icon: <Icon fontSize="small">table_view</Icon>,
    //   route: "/tables",
    //   component: <Tables />,
    // },
    {
        type: "collapse",
        name: "Billing",
        key: "billing",
        icon: <Icon fontSize="small">receipt_long</Icon>,
        route: "/billing",
        component: <Billing/>,
    },
    // {
    //   type: "collapse",
    //   name: "RTL",
    //   key: "rtl",
    //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    //   route: "/rtl",
    //   component: <RTL />,
    // },
    {
        type: "collapse",
        name: "Activate",
        key: "rtl",
        icon: <Icon fontSize="small">activate</Icon>,
        route: "/activate",
        component: <Activate/>,
    },
    {
        type: "collapse",
        name: "Product",
        key: "product",
        icon: <Icon fontSize="small">product</Icon>,
        route: "/product",
        component: <Product/>,
    },
    {
        type: "collapse",
        name: "Labels",
        key: "labels",
        icon: <Icon fontSize="small">product</Icon>,
        route: "/labels",
        component: <Labels/>,
    },
    {
        type: "collapse",
        name: "Printing",
        key: "printing",
        icon: <Icon fontSize="small">product</Icon>,
        route: "/printing",
        component: <Printing/>,
    },
    {
        type: "collapse",
        name: "Traceability",
        key: "traceability",
        icon: <Icon fontSize="small">product</Icon>,
        route: "/traceability",
        component: <Traceability/>,
    },
    {
        type: "collapse",
        name: "Funnel",
        key: "funnel",
        icon: <Icon fontSize="small">product</Icon>,
        route: "/funnel",
        component: <Funnel/>,
    },
    {
        type: "collapse",
        name: "Locations",
        key: "locations",
        icon: <Icon fontSize="small">product</Icon>,
        route: "/locations",
        component: <Locations/>,
    },
    {
        type: "collapse",
        name: "Industry",
        key: "industry",
        icon: <Icon fontSize="small">product</Icon>,
        route: "/industry",
        component: <Industry/>,
    },
    {
        type: "collapse",
        name: "Campaign",
        key: "campaign",
        icon: <Icon fontSize="small">product</Icon>,
        route: "/campaign",
        component: <Campaign/>,
    },
    {
        type: "collapse",
        name: "Register",
        key: "register",
        icon: <Icon fontSize="small">product</Icon>,
        route: "/register",
        component: <Register/>,
    },
    {
        type: "collapse",
        name: "Notifications",
        key: "notifications",
        icon: <Icon fontSize="small">notifications</Icon>,
        route: "/notifications",
        component: <Notifications/>,
    },
    {
        type: "collapse",
        name: "Profile",
        key: "profile",
        icon: <Icon fontSize="small">person</Icon>,
        route: "/profile",
        component: <Profile/>,
    },
    {
        type: "collapse",
        name: "Sign In",
        key: "sign-in",
        icon: <Icon fontSize="small">login</Icon>,
        route: "/authentication/sign-in",
        component: <SignIn/>,
    },
    {
        type: "collapse",
        name: "Sign Up",
        key: "sign-up",
        icon: <Icon fontSize="small">assignment</Icon>,
        route: "/authentication/sign-up",
        component: <SignUp/>,
    },
    {
        name: "Mobile1",
        key: "mobile1",
        icon: <Icon fontSize="small">welcome</Icon>,
        route: "/app/welcome",
        component: <Mobile1/>,
    },
    {
        name: "Mobile2",
        key: "mobile2",
        icon: <Icon fontSize="small">trace</Icon>,
        route: "/app/trace",
        component: <Mobile2/>,
    },
    {
        name: "MobileReviews",
        key: "mobile_reviews",
        icon: <Icon fontSize="small">reviews</Icon>,
        route: "/app/reviews",
        component: <MobileReviews/>,
    },
    {
        name: "MobileContent",
        key: "mobile_content",
        icon: <Icon fontSize="small">content</Icon>,
        route: "/app/content",
        component: <MobileContent/>,
    },
    {
        name: "MobileRecycle",
        key: "mobile_recycle",
        icon: <Icon fontSize="small">recycle</Icon>,
        route: "/app/recycle",
        component: <MobileRecycle/>,
    },
];

export default routes;
