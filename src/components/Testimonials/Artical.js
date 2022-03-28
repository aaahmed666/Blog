import React from "react";
import classes from "./Artical.module.css";

const Artical = ({ item }) => {
  return (
    <div className={classes.box}>
      <a className={classes.link} href="/#">
        <img src={item.image} alt="" />
      </a>
      <div className={classes.date}>
        <h6>{item.date}</h6>
      </div>
      <a className={classes.head} href="/#">
        {item.title}
      </a>
      <div className={classes.subtitle}>
        <h6>{item.info}</h6>
      </div>
    </div>
  );
};

export default Artical;
