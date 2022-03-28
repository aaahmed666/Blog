import React from "react";
import classes from "./ClinicServ.module.css";

const ClinicServ = ({ item }) => {
  return (
    <div className={classes["grid-serv"]}>
      <a href="/#" className={classes["serv-item"]}>
        <div className={classes["serv-icon"]}>
          <img src={item.image} alt="Clinic Services" />
        </div>
        <h3 className={classes["serv-name"]}>{item.text}</h3>
      </a>
    </div>
  );
};

export default ClinicServ;
