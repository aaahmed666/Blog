import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/swiper.min.css";
import "./Carousel.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Carousel = ({
  children,
  items,
  Navigation,
  slidesPerView,
  breakpoints,
  className,
}) => {
  const clone = items.map((el) => (
    <SwiperSlide key={el.id}>
      {React.cloneElement(children, { item: el, key: el.id })}
    </SwiperSlide>
  ));
  return (
    <Swiper
      slidesPerView={slidesPerView ? slidesPerView : 1}
      pagination={{ clickable: true }}
      navigation={Navigation ? Navigation : false}
      autoplay={{
        delay: 2000,
      }}
      breakpoints={breakpoints}
      className={className}>
      {clone}
    </Swiper>
  );
};

export default Carousel;
