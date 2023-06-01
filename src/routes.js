

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "./layouts/pages/landing-pages/about-us";
import ContactUs from "./layouts/pages/landing-pages/contact-us";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
        ],
      },
    ],
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    href: "https://github.com/Elvis888361",
  },
];

export default routes;
