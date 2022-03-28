import React, { useRef } from "react";
import classes from "./Footer.module.css";
import { Container } from "react-bootstrap";
import image from "../../assets/57-x-278-white.webp";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import "./Foot.css";

const Footer = () => {
  const slide = useRef();
  const inputSlide = useRef();

  const slidesvg = useRef();
  const inputSlidesvg = useRef();

  const showSlideHandler = () => {
    if (window.innerWidth < 768) {
      slide.current.classList.toggle("open");
      slidesvg.current.classList.toggle("open");
    }
  };

  const showSecondSlideHandler = () => {
    if (window.innerWidth < 768) {
      inputSlide.current.classList.toggle("open");
      inputSlidesvg.current.classList.toggle("open");
    }
  };

  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes["footer-row"]}>
          <div className={classes.about}>
            <a href="/#" className={classes["footer-link"]}>
              <img src={image} alt="" />
            </a>
            <p>
              مركز أ.د محمود زكريا لجراحات السمنة و السكر
              <br />8 شارع بيروت مصر الجديدة القاهرة
              <br />
              01000308574 - 01119997706
            </p>
            <ul className={classes.social}>
              <li>
                <a href="/#">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="/#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="/#">
                  <FaSnapchatGhost />
                </a>
              </li>
              <li>
                <a href="/#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="/#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.links}>
            <h3 onClick={showSecondSlideHandler} className={classes.title}>
              روابط سريعة{" "}
              <FaChevronDown
                className="icon"
                ref={inputSlidesvg}></FaChevronDown>
            </h3>
            <ul ref={inputSlide} className="list">
              <li className={classes.full}>
                <a href="/#">الرئيسية</a>
              </li>
              <li className={classes.full}>
                <a href="/#">عن د.محمود</a>
              </li>
              <li className={classes.full}>
                <a href="/#">مقالات طبية</a>
              </li>
              <li className={classes.full}>
                <a href="/#">آراء المرضى</a>
              </li>
              <li className={classes.full}>
                <a href="/#">احجز موعد</a>
              </li>
            </ul>
          </div>
          <div className={classes["footer-services"]}>
            <h3 onClick={showSlideHandler} className={classes.title}>
              خدمات المركز <FaChevronDown className="icon" ref={slidesvg} />
            </h3>
            <ul ref={slide} className="last">
              <li>
                <a href="/#">تحويل مسار المعدة الكلاسيكى</a>
              </li>
              <li>
                <a href="/#">عملية تكميم المعدة ثنائي التقسيم</a>
              </li>
              <li>
                <a href="/#">عملية الساسى</a>
              </li>
              <li>
                <a href="/#">عمليات إصلاح فشل جراحات السمنة</a>
              </li>
              <li>
                <a href="/#">تكميم المعدة بتقنية الثلاث فتحات</a>
              </li>
              <li>
                <a href="/#">عملية تحويل المسار المعدل</a>
              </li>
              <li>
                <a href="/#">شفط الدهون و تنسيق القوام</a>
              </li>
              <li>
                <a href="/#">عملية التكميم الدقيق</a>
              </li>
              <li>
                <a href="/#">تكميم المعدة بالمنظار من خلال فتحة واحدة</a>
              </li>
              <li>
                <a href="/#">جراحات لعلاج مرض السكر نهائياً</a>
              </li>
              <li>
                <a href="/#">تحويل مسار المعدة المصغر</a>
              </li>
              <li>
                <a href="/#">عملية حزام المعدة</a>
              </li>
              <li>
                <a href="/#">كشكشة المعدة بالمنظار</a>
              </li>
              <li>
                <a href="/#">الكبسولة المبرمجة</a>
              </li>
              <li>
                <a href="/#">عملية تكميم المعدة بالمنظار</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
