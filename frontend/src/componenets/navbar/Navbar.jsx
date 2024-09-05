import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo_dark from "../../assets/btr1-logo.png";
import logo_light from "../../assets/logo-light.png";
import search_icon_light from "../../assets/Icons/search-w.png";
import search_icon_dark from "../../assets/Icons/search-b.png";
import toggle_light from "../../assets/Icons/day.png";
import toggle_dark from "../../assets/Icons/night.png";
import styled from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
// import MessageIcon from '@material-ui/icons/Message';
import "./Navbar.css";

const StyledLink = styled(Link)`
  color: ${({ theme }) => (theme == "light" ? "black" : "white")};
  font-size: 24px;
  text-decoration: none;
  margin: 10px 0;
  padding: 5px 15px;
  transition: color 0.3s ease, transform 0.2s ease;
  border-radius: 5px;

  &:hover {
    color: ${({ theme }) => (theme === "light" ? "blue" : "lightblue")};
  }

  &.active {
    background-color: ${({ theme }) =>
      theme === "light" ? "grey" : "darkgrey"};
    transform: scale(0.95); /* Simulate button press */
    color: ${({ theme }) => (theme === "light" ? "blue" : "lightblue")};
  }

  @media (min-width: 769px) {
    margin: 0 10px;
  }
  @media (min-width: 707px) {
    margin: 0 0;
  }
`;

const Navbar = ({ theme, setTheme }) => {
  const [activeLink, setActiveLink] = useState("");

  const location = useLocation();

  useEffect(() => {
    // Update active link based on the current location
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    // Initialize popovers
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    popoverTriggerList.forEach((popoverTriggerEl) => {
      new window.bootstrap.Popover(popoverTriggerEl);
    });
  }, []);

  const toggleMode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src={theme == "light" ? logo_dark : logo_light}
          alt=""
          className="logo"
          // onClick={() => setActiveLink("/")}
        />
      </Link>
      <ul>
        <StyledLink
          to="/"
          className={activeLink === "/" ? "active" : ""}
          onClick={() => setActiveLink("/")}
          theme={theme}
        >
          Home
        </StyledLink>
        <StyledLink
          to="services"
          className={activeLink === "/services" ? "active" : ""}
          onClick={() => setActiveLink("/services")}
          theme={theme}
        >
          Services
        </StyledLink>
        <StyledLink
          to="contact"
          className={activeLink === "/contact" ? "active" : ""}
          onClick={() => setActiveLink("/contact")}
          theme={theme}
        >
          Contact
        </StyledLink>
        <StyledLink>
          <PhoneIcon
            className="btn btn-lg btn-primary"
            data-bs-toggle="popover"
            data-bs-title="Contact Us"
            data-bs-content="You can reach us at (951) 259-1530."
            style={{ fontSize: "3.5rem", cursor: "pointer", fontWeight: "700" }}
          />
        </StyledLink>
      </ul>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          style={{
            color: theme === "light" ? "white" : "black",
          }}
        />
        <img
          src={theme == "light" ? search_icon_light : search_icon_dark}
          alt=""
        />
      </div>

      <img
        src={theme == "light" ? toggle_dark : toggle_light}
        alt=""
        className="toggle-icon"
        onClick={() => {
          toggleMode();
        }}
      />
    </div>
  );
};

export default Navbar;
