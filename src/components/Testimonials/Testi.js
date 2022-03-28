import React from "react";
import classes from "./Testi.module.css";

const Testi = ({ item }) => {
  return (
    <div className={classes.box}>
      <div className={classes.title}>
        <h3>{item.name}</h3>
        {item.icon}
      </div>
      <div className={classes.subtitle}>{item.comment}</div>
    </div>
  );
};

export default Testi;
