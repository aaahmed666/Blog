import React from "react";
import Carousel from "../UI/Carousel";
import image1 from "../../assets/service5.png";
import image2 from "../../assets/service6.png";
import image3 from "../../assets/service7.png";
import image4 from "../../assets/service8.png";
import image5 from "../../assets/service9.png";
import image6 from "../../assets/service10.png";
import image7 from "../../assets/service11.png";
import image8 from "../../assets/service12.png";
import ClinicServ from "./ClinicServ";
import { Container } from "react-bootstrap";

import "./ClinicServices.css";

const servclinic = [
  { id: 1, image: image1, text: "عملية التكميم الدقيق" },
  { id: 2, image: image2, text: "عملية  التكميم البيكينى" },
  { id: 3, image: image3, text: "تكميم المعدة بالمنظار من خلال فتحة واحدة" },
  { id: 4, image: image4, text: "عملية تحويل مسار المعدةالكلاسيكى" },
  { id: 5, image: image5, text: "عملية تحويل المسار المعدل" },
  { id: 6, image: image6, text: "عملية تكميم المعدة المعدل" },
  { id: 7, image: image7, text: "الكبسولة المبرمجة" },
  { id: 8, image: image8, text: "عملية الساسى" },
];

const ClinicServices = () => {
  return (
    <div className="serv">
      <Container>
        <h2>خدماتنا المركز</h2>
        <Carousel
          className="clinic-swiper"
          items={servclinic}
          slidesPerView={8}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            567: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            991: {
              slidesPerView: 8,
              spaceBetween: 30,
            },
          }}>
          <ClinicServ />
        </Carousel>
        <div className="more">
          <a href="/#">المزيد عن الخدمات</a>
        </div>
      </Container>
    </div>
  );
};

export default ClinicServices;
