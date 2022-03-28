import React from "react";
import classes from "./Parteners.module.css";

const Parteners = ({ item }) => {
  return (
    <div>
      <a className={classes.link} href="/#">
        <img src={item.image} alt="" />
      </a>
    </div>
  );
};

export default Parteners;
