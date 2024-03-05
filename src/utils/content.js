import RawMatIcon from "../assets/images/RawMatIcon.png";
import ProcessorIcon from "../assets/images/ProccesorIcon.png";
import ManufacturingIcon from "../assets/images/ManufacturingIcon.png";
import RetailerIcon from "../assets/images/RetailerIcon.png";
import FoodIcon from "../assets/images/FoodIcon.png";
import SportIcon from "../assets/images/SportIcon.png";
import FashionIcon from "../assets/images/FashionIcon.png";
import ElectronicsIcon from "../assets/images/ElectronicsIcon.png";
import OtherIcon from "../assets/images/OtherIcon.png";
import SmallIcon from "../assets/images/SmallIcon.png";
import MediumIcon from "../assets/images/MediumIcon";
import BigIcon from "../assets/images/BigIcon.png";
import RouteIcon from "../assets/images/RouteIcon.png";
import Wallet from "../assets/images/Wallet.png";
import LocationIcon from "../assets/images/LocationIcon.png";
import Gamepad from "../assets/images/Gamepad.png";
import RegistrationIcon from "../assets/images/RegistrationIcon.png";
import AuthIcon from "../assets/images/AuthIcon.png";
import StarIcon from "../assets/images/StarIcon.png";
import PuzzleIcon from "../assets/images/PuzzleIcon.png";


export const industryContent = {
  description: [
    { text: "Raw materials/farming", icon: RawMatIcon, xs: 12, sm: 12, lg: 3.2 },
    { text: "Processor", icon: ProcessorIcon, xs: 12, sm: 12, lg: 2.4 },
    { text: "Manufacturing Brand", icon: ManufacturingIcon, xs: 12, sm: 12, lg: 3.2 },
    { text: "Retailer/Online Store", icon: RetailerIcon, xs: 12, sm: 12, lg: 3.2 }],
  industry: [
    { text: "Food and Beverage", icon: FoodIcon, xs: 12, sm: 12, lg: 2.8 },
    { text: "Retailer/Online Store", icon: RetailerIcon, xs: 12, sm: 12, lg: 3.2 },
    { text: "Sporting Goods", icon: SportIcon, xs: 12, sm: 12, lg: 2.4 },
    { text: "Fashion", icon: FashionIcon, xs: 12, sm: 12, lg: 2.2 },
    { text: "Electronics", icon: ElectronicsIcon, xs: 12, sm: 12, lg: 2.3 },
    { text: "Other", icon: OtherIcon, xs: 12, sm: 12, lg: 2.3 },
  ],
  size: [
    { text: "Small Company (up to 50 people)", icon: SmallIcon, xs: 12, sm: 12, lg: 4 },
    { text: "SMB (up to 500 people)", icon: MediumIcon, xs: 12, sm: 12, lg: 4 },
    { text: "Enterprise (500+ people)", icon: BigIcon, xs: 12, sm: 12, lg: 4 },
  ],
};


//printing
import LogoHp from "assets/images/Logo-HP.svg";
import LogoFujitsu from "assets/images/Logo-Fudjitsu.svg";
import LogoBrother from "assets/images/Logo-Brother-e1600350310290.svg";
import LogoCanon from "assets/images/Logo-Canon-e1600350489883.svg";
import LogoPanasonic from "assets/images/Logo-Panasonic 1.svg";
import LogoEpson from "assets/images/Logo-Epson.svg";
import LogoXerox from "assets/images/Logo-XEROX.svg";
import LogoSamsung from "assets/images/Logo-Samsung.svg";


export const vendors = [[LogoHp, "LogoHp"], [LogoFujitsu, "LogoFujitsu"],
  [LogoBrother, "LogoBrother"], [LogoCanon, "LogoCanon"], [LogoPanasonic, "LogoPanasonic"],
  [LogoEpson, "LogoEpson"], [LogoXerox, "LogoXerox"], [LogoSamsung, "LogoSamsung"]];


export const printProviders = [
  {
    name: "Avi Print",
    company: "Samuel Gawith 4, TLV",
    email: "contact@aviprint99.com",
    vat: "+972 50 555 5555",
  },
  {
    name: "Shmuel Print",
    company: "Peterson ave. 13, TLV",
    email : "sh.cohen@printamatic.com",
    vat : "+972 50 555 5511",
  },
];

export const additionalPrintProviders = [
  {
    name: "Shlomo Print",
    company: "Shlomo BenGurion 4, TLV",
    email: "contact@shlomo99.com",
    vat: "+972 50 444 4444",
  },
  {
    name: "Aviva Print",
    company: "Zomer ave. 15, TLV",
    email : "zomer.cohen@printamatic.com",
    vat : "+972 40 545 5441",
  },
];
