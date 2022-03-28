import React from "react";
import classes from "./Services.module.css";

const Services = ({ item }) => {
  return (
    <React.Fragment>
      <a href="/#" className={classes.link}>
        <div className={classes.box}>
          <div className={classes.image}>
            <img src={item.image} alt="Services" />
          </div>
          <div className={classes.text}>
            <h3>{item.text}</h3>
          </div>
        </div>
      </a>
    </React.Fragment>
  );
};

export default Services;
