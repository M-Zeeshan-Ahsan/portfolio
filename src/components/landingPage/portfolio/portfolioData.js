const PortfolioOne = require("../../../assets/images/project1.png");
const PortfolioThree = require("../../../assets/images/portfolio-3.png");
const PortfolioFour = require("../../../assets/images/portfolio-4.png");
const PortfolioTen = require("../../../assets/images/project10.png");
const PortfolioEleven = require("../../../assets/images/project11.png");
const SunChoiceProject = require("../../../assets/images/sunchoice-project.png");
const ShippelloProject = require("../../../assets/images/shipello-project.png");
const CleaqueProject = require("../../../assets/images/cleaques-project.png");
const CasanaProject = require("../../../assets/images/casana-project.png");
const LiveliProject = require("../../../assets/images/liveli-project.png");
const TangiblProject = require("../../../assets/images/tangibl-project.png");
const DunbarProject = require("../../../assets/images/dunbar-project.png");
const AuroraProject = require("../../../assets/images/aurora-project.png");

const portfolioData = {
  10: {
    id: 10,
    title: "Sunchoice",
    image: SunChoiceProject,
    description:
      "SunChoice is a web platform simplifying solar system installations, offering quotes, provider connections, and a user-friendly interface.",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Full Stack", "Front End", "Others"],
    websiteLink: "https://sunchoice.us/",
  },
  11: {
    id: 11,
    title: "Lineicons",
    image: PortfolioOne,
    description:
      "Handcrafted UI icons for modern user interfaces of web, mobile, and desktop app design and development projects. Lineicons is a huge and comprehensive pack of professionally designed icons, available in all vector formats that are easy to use on the web, design, coding, and beyond.",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Full Stack", "Front End", "Others"],
    websiteLink: "https://lineicons.com/",
  },
  13: {
    id: 13,
    title: "Smart Dhopa",
    image: PortfolioThree,
    description:
      "This is an Online Laundry Platform web Application for E-commerce business and Manage order and Authentication with firebase. User can buy listed services by logging into it with shopping cart functionality",
    tags: [
      "React",
      "Express",
      "MongoDB",
      "Firebase",
      "NodeJS",
      "Material UI",
      "Reactstrap",
    ],
    type: ["Full Stack", "Front End", "Others"],
    websiteLink: "https://smart-dhopa-online-laundry-app.web.app/",
  },
  4: {
    id: 4,
    title: "Doctor's Portal",
    image: PortfolioFour,
    description:
      "A Single page web app where people can pick the date time and set an appointment. A doctor can review his appointments, manage appointment and prescribe medicine to a Patient from his dashboard.",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Full Stack", "Front End", "Others"],
    websiteLink: "https://online-doctors-portal.web.app/",
  },
  5: {
    id: 5,
    title: "Cuckoo",
    image: PortfolioTen,
    description:
      "Fast, fair, feel-good broadband Full fibre speeds and the best customer service you've ever had.",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Landing Page", "Front End", "Others"],
    websiteLink: "https://www.cuckoo.co/",
  },
  6: {
    id: 6,
    title: "Skyfi",
    image: PortfolioEleven,
    description: "The World's Geospatial Hub ",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Landing Page", "Front End", "Others"],
    websiteLink: "https://www.skyfi.com/",
  },
  7: {
    id: 7,
    title: "Shippello",
    image: ShippelloProject,
    description:
      "Shippelo is a responsive shipment tracking app with real-time updates, intuitive design, seamless functionality, and modern UI/UX features.",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Landing Page", "Front End", "Others"],
    websiteLink: "https://shippelloinvoices.com/",
  },
  8: {
    id: 8,
    title: "Cleaques",
    image: CleaqueProject,
    description:
      "Cleaques is a lifestyle platform designed to connect African and Caribbean diasporas, enabling secure product exchanges, services, and community building.",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Landing Page", "Front End", "Others"],
    websiteLink: "https://www.cleaques.com/",
  },
  9: {
    id: 9,
    title: "Liveli",
    image: LiveliProject,
    description:
      "Liveli is a social networking hub for sharing lifestyles, earning money, streaming live events, and connecting with loved ones.",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Landing Page", "Front End", "Others"],
    websiteLink: "https://liveli.app/",
  },
  3: {
    id: 3,
    title: "Tangible 3D Shoe Customization",
    image: TangiblProject,
    description:
      "Built a 3D shoe customization application using Next.js and Three.js, enabling real-time interaction with colors, textures, and components. Optimized rendering performance with efficient state management, lazy loading, and responsive UI for smooth cross-device experience.",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Full Stack", "Front End", "Others"],
    websiteLink: "https://tangibl.ai/",
  },
  1: {
    id: 1,
    title: "Dunbar",
    image: DunbarProject,
    description:
      "Dunbar is a customer feedback and micro-survey platform that enables businesses to collect responses via QR codes and shareable links.It helps manage complaints, generate insights, and improve customer experience and Google Reviews.",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Full Stack", "Front End", "Others"],
    websiteLink: "https://150dunbar.com/",
  },
  2: {
    id: 2,
    title: "Aurora – Clinical Research Platform",
    image: AuroraProject,
    description:
      "Aurora is a comprehensive clinical research platform that streamlines data collection, analysis, and reporting for researchers and healthcare professionals.",
    tags: [
      "React",
      "Context API",
      "Tailwind",
      "Firebase",
      "NodeJS",
      "SSLCOMMERZ",
    ],
    type: ["Full Stack", "Front End", "Others"],
    websiteLink: "https://auroranegotiator.com ",
  },
};

export default portfolioData;
