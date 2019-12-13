import React from "react";
import logo from "../img/logo.svg";

const Logo = (props) => {
  return (
    <a className={props.classes} href="#/"><img src={logo} width={props.width} alt="netflux logo" /></a>
  );
}

Logo.defaultProps = {
  classes: "navbar-item",
  width: 80
}

export default Logo;