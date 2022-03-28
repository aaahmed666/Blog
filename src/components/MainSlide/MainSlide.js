import React from "react";
import Carousel from "../UI/Carousel";
import ShapeOne from "../UI/ShapeOne";
import Services from "../Services/Services";
import image1 from "../../assets/slidder-1.png";
import image2 from "../../assets/slider2.jpg";
import image3 from "../../assets/slider3.jpg";
import image4 from "../../assets/slider4.jpg";
import image5 from "../../assets/service1.png";
import image6 from "../../assets/service2.png";
import image7 from "../../assets/service3.png";
import image8 from "../../assets/service4.png";
import { Container } from "react-bootstrap";

import "./MainSlide.css";

const SlideData = [
  {
    id: 1,
    image: image1,
  },

  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
];

const MainServices = [
  { id: 5, image: image5, text: "تكميم المعدة بتقنية الثلاث فتحات" },
  { id: 6, image: image6, text: "عملية تكميم المعدة بالمنظار" },
  { id: 7, image: image7, text: "تحويل مسار المعدة المصغر" },
  { id: 8, image: image8, text: "عملية الساسي ثنائي التقييم" },
];

const MainSlide = () => {
  return (
    <React.Fragment>
      <div className="show">
        <Carousel className="main" items={SlideData}>
          <ShapeOne />
        </Carousel>
      </div>
      <div className="serve">
        <Container>
          <h2>خدماتنا الرئيسية</h2>
          <Carousel
            className="side"
            items={MainServices}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              567: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              767: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              991: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}>
            <Services />
          </Carousel>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default MainSlide;
