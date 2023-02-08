import React from "react";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import LanIcon from "@mui/icons-material/Lan";
import BrushIcon from "@mui/icons-material/Brush";
import WebhookIcon from "@mui/icons-material/Webhook";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import Html from "../images/tml.svg";
// import Css from './icons/css.svg'
import Javascript from "./icons/javascript.svg";
import Java from "./icons/java.svg";
import eact from "./icons/reactjs.svg";
import Spring from "./icons/springio.svg";
import Node from "./icons/noodejs.svg";
import Amazonn from "./icons/amazonn.svg";
import Kubernet from "./icons/kubernete.svg";
// import Jenkins from './icons/jenkins.svg'
import Mysql from "./icons/mysql.svg";
import Oracle from "./icons/oracle.svg";
// import Grafanaaa from './icons/grafana.svg'
import Redis from "./icons/redis.svg";
import Amazon from "./icons/amazon.svg";
import { FaReact, FaDocker, FaAws } from "react-icons/fa";

import {
  DiJavascript,
  DiJava,
  DiNodejsSmall,
  DiRedis,
  DiMongodb,
} from "react-icons/di";
import {
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiAirplayaudio,
  SiKubernetes,
  SiGrafana,
  SiSpringboot,
} from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { ImHtmlFive2 } from "react-icons/im";
import { GiCircleClaws } from "react-icons/gi";

export const whoweserve = [
  {
    id: 1,
    Text: "Small & Medium Business",
    color: "blue",
    logo: <SignalCellularAltIcon />,
  },
  { id: 2, Text: "Startup Business", color: "red", logo: <HandshakeIcon /> },
  { id: 3, Text: "Enterprise", color: "green", logo: <BusinessOutlinedIcon /> },
  { id: 4, Text: "Agencies", color: "yellow", logo: <LocationCityIcon /> },
];

export const industries = [
  {
    id: 1,
    Text: "Logistics and distribution",
    color: "blue",
    logo: <SignalCellularAltIcon />,
  },
  { id: 2, Text: "Restaurants", color: "red", logo: <LunchDiningIcon /> },
  { id: 3, Text: "Gaming", color: "green", logo: <BusinessOutlinedIcon /> },
  {
    id: 4,
    Text: "On-Demand Solutions",
    color: "yellow",
    logo: <AspectRatioIcon />,
  },
  {
    id: 5,
    Text: "social Networking",
    color: "blue",
    logo: <VpnLockIcon />,
  },
  { id: 6, Text: "Real Estate", color: "green", logo: <HandshakeIcon /> },
  { id: 7, Text: "Travel", color: "green", logo: <AirplaneTicketIcon /> },
  {
    id: 8,
    Text: "Healthcare and fitness",
    color: "red",
    logo: <MedicationLiquidIcon />,
  },
];

export const process = [
  {
    id: 1,
    Text: "After trial and following all processed, your app is ready to launch on the app store or play store",
    color: "red",
    Heading: "Deployment",
    logo: <AssignmentTurnedInIcon />,
  },
  {
    id: 2,
    Text: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project",
    Heading: "Requirement Gathering",
    color: "green",
    logo: <HelpCenterIcon />,
  },
  {
    id: 3,
    Text: "At Izsoftwares, we value quality and provide 100% bug free application with no compromisation in it.",
    Heading: "Quality Assurance",
    color: "Brown",
    logo: <CameraEnhanceIcon />,
  },
  {
    id: 4,
    Heading: "Development",
    Text: "Development of mobile application/web/blockchain using latest tools and technologies with transparency",
    color: "yellow",
    logo: <WebhookIcon />,
  },
  {
    id: 5,
    Heading: "Prototype",
    Text: "After designing, you will get your prototype, which  will be sent ahead for the develpment process for the product",
    color: "blue",
    logo: <LanIcon />,
  },
  {
    id: 6,
    Text: "We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience",
    Heading: "Ux/Ui Design",
    color: "red",
    logo: <BrushIcon />,
  },
  {
    id: 7,
    Text: "Our company offers you all support and the team is always ready to answer every query after deployment",
    Heading: "Support and maintenance",
    color: "grey",
    logo: <PermDataSettingIcon />,
  },
];

export const backend = [
  { id: 1, name: "java", color: "blue", icon: <img alt="html" src={Java} /> },
  { id: 2, name: "Node", icon: <img alt="html" src={Node} /> },
  {
    id: 4,
    name: "frameworks",
    frameworks: [
      {
        name: "spring family",
        color: "yellow",
        icon: <img alt="html" src={Spring} />,
      },
      { name: "hybernate", color: "blue", icon: <SiSpringboot /> },
      {
        name: "java server faces",
        color: "green",
        icon: <img alt="html" src={Spring} />,
      },
      { name: "play", color: "brown", icon: <SiSpringboot /> },
    ],
  },
];

export const frontend = [
  { id: 1, name: "HTML", color: "red", icon: <img alt="html" src={Html} /> },
  { id: 2, name: "CSS", icon: <SiCss3 /> },
  {
    id: 3,
    name: "JavaScript",
    color: "yellow",
    icon: <img alt="html" src={Javascript} />,
  },
  {
    id: 4,
    name: "frameworks",
    frameworks: [
      { name: "React", color: "pink", icon: <img alt="html" src={eact} /> },
      { name: "Nextjs", color: "blue", icon: <TbBrandNextjs /> },
    ],
  },
];

export const database = [
  {
    name: "sql",
    dataa: [
      { name: "Mysql", color: "yellow", icon: <img alt="html" src={Mysql} /> },
      { name: "postgres", color: "grey", icon: <SiPostgresql /> },
      { name: "Oracle", icon: <img alt="html" src={Oracle} /> },
      { name: "play", icon: <SiAirplayaudio /> },
    ],
  },
  {
    name: "nosql",
    dataa: [
      { name: "Redis", icon: <img alt="html" src={Redis} /> },
      { name: "MongoDB", icon: <DiMongodb /> },
    ],
  },
];

export const cloud = [
  {
    id: 1,
    name: "Amazon s3",
    color: "yellow",
    icon: <img alt="html" src={Amazon} />,
  },
  { id: 2, name: "amazon RDS", icon: <img alt="html" src={Amazonn} /> },
];

export const Devop = [
  {
    name: "Containerization",
    dataa: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernet", icon: <img alt="html" src={Kubernet} /> },
    ],
  },
  {
    name: "Cdtools",
    dataa: [
      { name: "jenkins", icon: <SiAirplayaudio /> },
      { name: "AWS developer tools", icon: <SiAirplayaudio /> },
    ],
  },
  {
    name: "Monitoring",
    dataa: [{ name: "Grafana", icon: <GrOracle /> }],
  },
];

// export { whoweserve, industries, process, backend, frontend, database, cloud, Devop };
