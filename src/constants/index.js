import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,

  // ach,
} from "../assets";

// import achIcon from '../assets';
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Contributed to the abstract",
    company_name: "International Conferenece",
    // icon:achIcon,
    iconBg: "#383E56",
    date: "Aug 18 2023 - Sep 23, 2023",
    points: [
      "Contributed to the abstract submission process in the International Conference on Artificial Intelligence in Agriculture & Biomedical Science.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Tech Traverse 1.0",
    company_name: "Graphic Era Univeristy",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 22 2023 - Aug 25, 2023",
    points: [
      "Secured 3rd position in TECH TRAVERSE 1.0 organized by ISTE, student chapter under department of Computer Applications.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Event Head",
    company_name: "Accolade",
    // icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - March 2023",
    points: [
      "Pivotal role encompassing event planning, budget management, effective promotion, member engagement, and seamless event execution.      ",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Cordinator",
    company_name: "Art and Craft Club",
    // icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Played a pivotal role in organizing and managing art and craft events, coordinating with members, and ensuring the successful execution of various club activities.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "Directed the development of a Portfolio website with the help of ReactJS and  for the front-end, ensuring an intuitive user interface and smooth navigation.Conducted rigorous testing and optimization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/harshit484/3D-Portfolio-Website",
  },
  {
    name: "water sustainability Prediction",
    description:
      " Implemented a Machine-Learning based water potability and sustainability prediction. Demonstrated the accuracy of the model using various machine learning algorithms and deploying advanced machine learning techniques to achieve outstanding prediction accuracy.",
    tags: [
      {
        name: "Scikit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/harshit484/Water-Sustainability-Prediction",
  },
  {
    name: "Face detection using openCV",
    description:
      "Created an application for Potato Leaf Disease Classification leveraging a deep learning-based Convolutional Neural Network (CNN) model. Integrated image upload functionality via Postman, allowing users to submit potato disease images for instant classification.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/harshit484/Face-Detection",
  },
];

export { services, technologies, experiences, testimonials, projects };