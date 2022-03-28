import React from "react";
import Accordion from "./Accordion";
import classes from "./Question.module.css";
import image from "../../assets/full2.png";
import { Container } from "react-bootstrap";

const Questions = () => {
  return (
    <div className={classes.ask}>
      <Container>
        <div className={classes["Q-image"]}>
          <span>
            <img src={image} alt="" />
          </span>
        </div>
        <div className={classes.answer}>
          <h2>أسئلة وأجوبة متكررة</h2>
          <Accordion />
        </div>
      </Container>
    </div>
  );
};

export default Questions;
