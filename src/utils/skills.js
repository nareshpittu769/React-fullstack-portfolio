import { BsFiletypeCss, BsFiletypeHtml } from "react-icons/bs";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiMongodb,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";

export const skills = [
  { id: 0, name: "html", icon: BsFiletypeHtml },
  { id: 1, name: "css", icon: BsFiletypeCss },
  { id: 2, name: "javascript", icon: RiJavascriptFill },
  { id: 3, name: "react js", icon: RiReactjsFill },
  { id: 4, name: "node js", icon: FaNode },
  { id: 5, name: "express js", icon: SiExpress },
  { id: 6, name: "mongodb", icon: SiMongodb },
  { id: 7, name: "Python", icon: SiPython },
  { id: 8, name: "Git", icon: SiGit },
  { id: 9, name: "Tailwind css", icon: SiTailwindcss },
];

export const eduaction = [
  {
    edu: {
      degree: "Btech",
      title: "Sree Vidyanikethan Engineering College",
      passedout: "2019 - 2023",
      stream: "Computer Science and Engineering",
      percentage: "79.2%",
      location: "Tirupati, Andra-Pradesh, India",
    },
  },
  {
    edu: {
      degree: "Intermediate",
      title: "Sri Chaitanya Junior College",
      passedout: "2017 - 2019",
      stream: "MPC",
      percentage: "92.2%",
      location: "Kurnool, Andra-Pradesh, India",
    },
  },
  {
    edu: {
      degree: "SSC",
      title: "Padmavani High School",
      passedout: "2016 - 2017",
      stream: "genral",
      percentage: "78%",
      location: "Ananthapur, Andra-Pradesh, India",
    },
  },
];
