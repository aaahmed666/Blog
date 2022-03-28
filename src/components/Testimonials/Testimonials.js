import React from "react";
import "./Testimonials.css";
import { FaQuoteRight } from "react-icons/fa";
import Carousel from "../UI/Carousel";
import Testi from "./Testi";
import image1 from "../../assets/blog1.png";
import image2 from "../../assets/blog2.png";
import image3 from "../../assets/blog3.png";
import image5 from "../../assets/partner1.png";
import image6 from "../../assets/partner2.png";
import image7 from "../../assets/partner3.png";
import image8 from "../../assets/partner4.png";
import image9 from "../../assets/partner5.png";
import image10 from "../../assets/partner6.png";
import Artical from "./Artical";
import Parteners from "./Parteners";
import { Container } from "react-bootstrap";

const opinion = [
  {
    id: 1,
    name: "خالد رمزي",
    icon: <FaQuoteRight />,
    comment:
      "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام في القدم. قام البروفيسور ريتشارد ماك لينتوك ",
  },
  {
    id: 2,
    name: "أحمد عبد الهادي",
    icon: <FaQuoteRight />,
    comment:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما",
  },
  {
    id: 3,
    name: "خالد رمزي",
    icon: <FaQuoteRight />,
    comment:
      "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام في القدم. قام البروفيسور ريتشارد ماك لينتوك ",
  },
  {
    id: 4,
    name: "أحمد عبد الهادي",
    icon: <FaQuoteRight />,
    comment:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما",
  },
];

const artical = [
  {
    id: 5,
    image: image1,
    date: "25 مايو 2020 ",
    title: "عملية التكميم السُرى ( فتحة واحدة لتقليل الألم)",
    info: "عملية تكميم المعدة هى العملية الأكثر شيوعا على مستوى العالم لعلاج السمنة المفرطة فهى تعتبر الخيار الأول بين عمليات السمنة فى كل دول ...",
  },
  {
    id: 6,
    image: image2,
    date: "25 مايو 2020 ",
    title: "ماهو الفرق بين بالون المعدة والكبسولة المبرمجة ؟",
    info: "تطورت جراحات السمنة المفرطة وأصبحت تقدم الجديد كل فترة لتسهيل عمليات السمنة المفرطة على المرضى والتخلص من الدهون والوزن ...",
  },
  {
    id: 7,
    image: image3,
    date: "25 مايو 2020 ",
    title: "أهم 5 عوامل لنجاح عمليات السمنة المفرطة",
    info: "ماهى أسباب نجاح جراحات السمنة المفرطة وماهى العوامل التى تساعد على نجاحها من مريض لمريض آخر ، وكيف نستطيع ...",
  },
  {
    id: 8,
    image: image1,
    date: "25 مايو 2020 ",
    title: "عملية التكميم السُرى ( فتحة واحدة لتقليل الألم)",
    info: "عملية تكميم المعدة هى العملية الأكثر شيوعا على مستوى العالم لعلاج السمنة المفرطة فهى تعتبر الخيار الأول بين عمليات السمنة فى كل دول ...",
  },
];

const parteners = [
  { id: 9, image: image5 },
  { id: 10, image: image6 },
  { id: 11, image: image7 },
  { id: 12, image: image8 },
  { id: 13, image: image9 },
  { id: 14, image: image10 },
  { id: 15, image: image5 },
  { id: 16, image: image6 },
  { id: 17, image: image7 },
  { id: 18, image: image8 },
];

const Testimonials = () => {
  return (
    <React.Fragment>
      <div className="testi">
        <h2>آراء المرضى</h2>
        <Container>
          <Carousel
            slidesPerView={2}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              567: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              767: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              991: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="testimon"
            items={opinion}>
            <Testi />
          </Carousel>
        </Container>
      </div>
      <div className="articals">
        <h2>مقالات طبية</h2>
        <Container>
          <Carousel
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              567: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              767: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="art"
            items={artical}>
            <Artical />
          </Carousel>
        </Container>
      </div>
      <div className="parteners">
        <h2>شركاء نجاحنا المميزون</h2>
        <Container>
          <Carousel
            slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              567: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              767: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              991: {
                slidesPerView: 6,
                spaceBetween: 15,
              },
            }}
            className="parte"
            items={parteners}>
            <Parteners />
          </Carousel>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Testimonials;
