import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./index.scss";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import HeaderLink from "../../components/HeaderLink";

const Header: React.FC = () => {
  const links = [
    { route: "/create-employee", logo: faUserPlus, title: "Create employee" },
    { route: "/employee-list", logo: faAddressBook, title: "Current employee" },
  ];

  return (
    <nav className="main-nav">
      <div className="main-nav-home-container">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Wealth Health Logo"
          />
          <h1 className="sr-only">Wealth Health</h1>
        </Link>
        <div>HRnet</div>
      </div>

      <div className="nav-link-container">
        {links.map((link, index) => (
          <HeaderLink
            key={index}
            route={link.route}
            logo={link.logo}
            title={link.title}
          />
        ))}
      </div>
    </nav>
  );
};

export default Header;
