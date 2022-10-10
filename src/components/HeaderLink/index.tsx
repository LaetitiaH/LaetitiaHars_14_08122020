import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./index.scss";

const HeaderLink: ({
  route,
  logo,
  title,
}: {
  route: string;
  logo: IconProp;
  title: string;
}) => JSX.Element = ({ route, logo, title }): JSX.Element => (
  <Link to={route} className="main-nav-item">
    <FontAwesomeIcon icon={logo} size="lg" color="#5A6E11" />
    <div className="main-nav-item-text">{title}</div>
  </Link>
);

export default HeaderLink;
