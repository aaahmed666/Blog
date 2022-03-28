import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { FaBars, FaTimes, FaCalendarAlt } from "react-icons/fa";
import image from "../../assets/logo.png";

import "./NavBar.css";

const NavBar = () => {
  const Navref = useRef();
  const Popref = useRef();

  const showNavHandler = () => {
    Navref.current.classList.add("open");
    Popref.current.classList.add("open");
    document.body.classList.add("ovh");
  };

  const removePopupHandler = () => {
    Navref.current.classList.remove("open");
    Popref.current.classList.remove("open");
    document.body.classList.remove("ovh");
  };

  return (
    <header>
      <div ref={Popref} onClick={removePopupHandler} className="popup"></div>
      <Container>
        <div className="list-content">
          <nav>
            <button className="menu-btn" onClick={showNavHandler}>
              <FaBars />
            </button>
            <ul ref={Navref}>
              <li>
                <a className="active" href="/#">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="/#">عن د.محمود</a>
              </li>
              <li>
                <a href="/#">خدمات المركز</a>
              </li>
              <li>
                <a href="/#">وسائل الاعلام</a>
              </li>
              <li>
                <a href="/#">قصص النجاح</a>
              </li>
              <li>
                <a href="/#">آراء مرضانا</a>
              </li>
              <li>
                <a href="/#">فيديوهات</a>
              </li>
              <li>
                <a href="/#">كتاب التغذية</a>
              </li>
              <li>
                <a href="/#">مقالات طبية</a>
              </li>
              <li>
                <a href="/#">رأيك يهمنا</a>
              </li>
              <button onClick={removePopupHandler} className="close-btn">
                <FaTimes />
              </button>
              <button className="lang" type="button">
                English
              </button>
            </ul>
          </nav>
          <figure className="logo">
            <a href="/#">
              <img src={image} alt="Main Logo" />
            </a>
          </figure>
          <a className="booking" href="#Booking">
            <FaCalendarAlt />
            احجز موعد
          </a>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
