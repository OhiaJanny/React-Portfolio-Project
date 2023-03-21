import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaFacebook, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin,  FaInstagram, } from "react-icons/fa";
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
import work15 from "./assets/work15.png";


export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  {
   
   icon: <FaGithub  />,
   url: "https://github.com/OhiaJanny"
  },
  
  {
   
    icon:  <FaFacebook/>,
    url: "https://www.facebook.com/profile.php?id=100005971664871&mibextid=LQQJ4d"
   },
 
   {
    
    icon:   <FaLinkedin/>,
    url: "https://www.linkedin.com/in/ohia-jane-chidera-458b39213/"
   },
 
   {
    
    icon:   <FaInstagram />,
    url: "https://www.facebook.com/profile.php?id=100005971664871&mibextid=LQQJ4d"
   },
 
  
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
    category: "web",
    github_url:  "https://github.com/OhiaJanny/Wallet-management",
    eye_url: "https://wallet-management-kt6wi64ue-ohiajanny.vercel.app/"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
    github_url:  "https://github.com/OhiaJanny/E-learning-Website-From-Home-",
    eye_url: "https://startling-frangipane-a5d63c.netlify.app/"
  },
  
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
    github_url:  "https://github.com/OhiaJanny",
    eye_url: "https://www.kartlog.co/"
  },


  {
    id: 7,
    img: work7,
    name: "project 7",
    category: "web",
    github_url:  "https://github.com/OhiaJanny/ohiajanny.github.io",
    eye_url: "https://ohiajanny.github.io/index.html#Services"
  },


  {
    id: 8,
    img: work8,
    name: "project 8",
    category: "web",
    github_url:  "https://github.com/OhiaJanny/Bootstrap-portfolio",
    eye_url: "https://ohiajanny.github.io/Bootstrap-portfolio/"
  },

  {
    id: 9,
    img: work9,
    name: "project 9",
    category: "web",
    github_url:  "https://github.com/OhiaJanny/Furniture-Website--Project-1-",
    eye_url: "https://ohiajanny.github.io/Furniture-Website--Project-1-/"
  },
  
  {
    id: 10,
    img: work10,
    name: "project 10",
    category: "web",
    github_url:  "https://github.com/OhiaJanny/currencyconverter",
    eye_url: "https://currencyconverter-sand.vercel.app/"
  },

  {
    id: 11,
    img: work11,
    name: "project 11",
    category: "web",
    github_url: "https://github.com/OhiaJanny/MyReact-App",
    eye_url: "https://codehokage1.github.io/web1/index.html"
  },

  {
    id: 13,
    img: work13,
    name: "project 13",
    category: "design",
    github_url: "https://www.figma.com/file/ukn835RskEF3m2n31jpczR/Kartlog-Website-Design?node-id=0%3A1&t=hy1NcqgiZoq3Zo1Y-0 ",
    eye_url: "https://www.kartlog.co/"
  },

  {
    id: 14,
    img: work14,
    name: "project 14",
    category: "design",
    github_url: "https://www.figma.com/file/qmOEYlgG6NF7NAAl0pLAhF/GOM-Hospital?t=hy1NcqgiZoq3Zo1Y-0",
    eye_url: "https://www.figma.com/file/qmOEYlgG6NF7NAAl0pLAhF/GOM-Hospital?t=hy1NcqgiZoq3Zo1Y-0"
  },


  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app",
    github_url: "https://www.figma.com/file/dS7sCqIkjc8radlZN9hhDu/Trenduu?node-id=0%3A1&t=hy1NcqgiZoq3Zo1Y-0",
    eye_url: "https://www.figma.com/file/dS7sCqIkjc8radlZN9hhDu/Trenduu?node-id=0%3A1&t=hy1NcqgiZoq3Zo1Y-0"
  },


  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app',
    github_url: "https://www.figma.com/file/rAptgw0MkZlO8BikN9HFEf/Triisum-app?t=hy1NcqgiZoq3Zo1Y-0",
    eye_url: "https://www.figma.com/file/rAptgw0MkZlO8BikN9HFEf/Triisum-app?t=hy1NcqgiZoq3Zo1Y-0"
  },

  


  {
    id: 12,
    img: work12,
    name: "project 12",
    category: 'app',
    github_url: "https://www.figma.com/file/0jjjnypeOyxWNJdTd9rg1s/Untitled?node-id=0%3A1&t=hy1NcqgiZoq3Zo1Y-0",
    eye_url: "https://www.figma.com/file/0jjjnypeOyxWNJdTd9rg1s/Untitled?node-id=0%3A1&t=hy1NcqgiZoq3Zo1Y-0"
  },

  {
    id: 15,
    img: work15,
    name: "project 15",
    category: 'app',
    github_url: "https://www.figma.com/file/K5vFO2FfrxJKxha6ihDZa4/Untitled?t=hy1NcqgiZoq3Zo1Y-0",
    eye_url: "https://www.figma.com/file/K5vFO2FfrxJKxha6ihDZa4/Untitled?t=hy1NcqgiZoq3Zo1Y-0"
  },


  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
    github_url: "https://www.figma.com/file/GHe477Jz6AUwuy6fpJ4Cyp/Untitled?t=hy1NcqgiZoq3Zo1Y-0",
    eye_url: "https://www.mercif.com/"
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

