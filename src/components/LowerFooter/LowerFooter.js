import React from "react";
import classes from "./LowerFooter.module.css";
import { Container } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const LowerFooter = () => {
  return (
    <div className={classes.lower}>
      <Container>
        <div className={classes.copyrights}>
          <p>
            جميع الحقوق محفوظة، أستاذ دكتور محمود زكريا الجنزوري &copy; 2020
          </p>
          <p>
            صنع <FaHeart /> في <a href="/#">ديجترا</a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default LowerFooter;
