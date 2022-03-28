import React from "react";

import classes from "./ShapeOne.module.css";

const ShapeOne = ({ item }) => {
  let found = item === "" ? "" : item;
  return (
    <React.Fragment>
      <a href="/#">
        <div className={classes.shape}>
          <img src={item.image} alt="Main Slide" />
        </div>
      </a>
    </React.Fragment>
  );
};

export default ShapeOne;
