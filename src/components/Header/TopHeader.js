import React from "react";
import { Container } from "react-bootstrap";
import classes from "./TopHeader.module.css";
import { FaMobileAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const TopHeader = () => {
  return (
    <React.Fragment>
      <div className={classes["top-header"]}>
        <Container>
          <div className={classes["top-header-content"]}>
            <div className={classes["contact-us"]}>
              <div className={classes.call}>
                <a href="tel:01000308574">
                  <div className={classes.icon}>
                    <FiMail />
                  </div>
                  <p>اتصل بنا على 01000308574</p>
                </a>
              </div>
              <div className={classes.mail}>
                <a href="mail:01000308574">
                  <div className={classes.icon}>
                    <FaMobileAlt />
                  </div>
                  <p>راسلنا على info@drsemna.com </p>
                </a>
              </div>
            </div>
            <div className={classes.social}>
              <div className={classes["social-link"]}>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer">
                  <FaYoutube />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer">
                  <FaSnapchatGhost />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer">
                  <FaTwitter />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer">
                  <AiOutlineInstagram />
                </a>
              </div>
              <div className={classes.lang}>
                <button type="button">English</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TopHeader;
