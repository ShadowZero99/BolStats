import React from "react";
import { FaAccessibleIcon, FaGg, FaGitAlt } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";

export const featureList = [
  {
    id: 1,
    icon: <FaAccessibleIcon color="0a1930" size={22} />,
    heading: "PSYCHOLOGY DRIVEN",
    text: "Psychology and behavior analytics-driven UI/UX design to build addictive web apps and dashboards",
  },
  {
    id: 2,
    icon: <SiDatabricks color="0a1930" size={22} />,
    heading: "HIGHLY SCALABLE",
    text: "We carefully architect each web platform to ensure high scalability, vertically as well as horizontally.",
  },
  {
    id: 3,
    icon: <MdConnectWithoutContact color="0a1930" size={22} />,
    heading: "PERFORMANCE ARCHITECTURE",
    text: "  We carefully architect each web app to ensure high performance and low infrastructure costs. ",
  },
  {
    id: 4,
    icon: <FaGitAlt color="0a1930" size={22} />,
    heading: "CUSTOM WEB APPS",
    text: "Are you planning to build a custom new web application or a web portal? We've got you covered. Reach out to us today to discuss your project idea and requirements.",
  },
  {
    id: 5,
    icon: <FaGg color="0a1930" size={22} />,
    heading: "FAILPROOF AUDITS",
    text: "Every web app is built with enterprise-grade security and undergoes rigorous PEN testing. ",
  },
];
