import React from "react";
import image from "../../assets/logo.png";
import classes from "./MainLogo.module.css";

const MainLogo = () => {
  return (
    <figure className={classes.logo}>
      <a href="/#">
        <img src={image} alt="Main Logo" />
      </a>
    </figure>
  );
};

export default MainLogo;
