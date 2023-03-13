import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";
import work7 from "./assets/work7.png";
import work8 from "./assets/work8.png";
import work9 from "./assets/work9.png";
import work10 from "./assets/work10.png";
import work11 from "./assets/work11.png";
import work12 from "./assets/work12.png";
import work13 from "./assets/work13.png";
import work14 from "./assets/work14.png";


export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaDribbble />,
  <FaInstagram />,
  <FaLinkedin />,
  <FaTwitter />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Jane Ohia"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+2349055016590"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "janechidera12@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]

export const experiences = [
  {
    id: 1,
    year: "Sept 2022 - Present",
    position: "Scrum Master",
    company: "ABINBEV"
  },

  {
    id: 2,
    year: "Feb 2022 - March 2023",
    position: "Software Dveloper Intern",
    company: "ALX Africa"
  },

 
  {
    id: 3,
    year: "Jan 2022 - Dec 2022",
    position: "UX/UI Designer",
    company: "Triisum"
  },

  {
    id: 4,
    year: "May 2019 - Aug 2022",
    position: "Intern Web Developer",
    company: "PwC"
  },

  {
    id: 5,
    year: "Jan 2020 - Nov 2021",
    position: "Project Manager",
    company: "Very"
  },

  {
    id: 6,
    year: "Jan 2019 - May 2021",
    position: "UX/UI Designer",
    company: "Kartlog"
  },

  {
    id: 7,
    year: "Jan 2019 - Jan 2020",
    position: "Project Manager",
    company: "Techlogix"
  }
]
export const finishes = [
  {
    id: 1,
    number: '7+',
    itemName: "General Years Of Experience"
  },
  {
    id: 2,
    number: "200+",
    itemName: "Satisfied Customers"
  },
  {
    id: 3,
    number: "100+",
    itemName: "Designed Items"
  },
  {
    id: 4,
    number: "80+",
    itemName: "Clients Served"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 7,
    img: work7,
    name: "project 7",
    category: "web"
  },
  {
    id: 8,
    img: work8,
    name: "project 8",
    category: "web"
  },
  {
    id: 9,
    img: work9,
    name: "project 9",
    category: "web"
  },
  
  {
    id: 10,
    img: work10,
    name: "project 10",
    category: "web"
  },

  {
    id: 11,
    img: work11,
    name: "project 11",
    category: "web"
  },

  {
    id: 13,
    img: work13,
    name: "project 13",
    category: "design"
  },

  {
    id: 14,
    img: work14,
    name: "project 14",
    category: "design"
  },


  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },

  


  {
    id: 12,
    img: work12,
    name: "project 12",
    category: 'app'
  },

 

  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design"
  }

  
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Lagos , Nigeria"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "janechidera12@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+2349055016590"
  }
]
