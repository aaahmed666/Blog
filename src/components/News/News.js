import React from "react";
import { Container } from "react-bootstrap";
import classes from "./News.module.css";

const lastnews = [
  {
    id: 1,
    num: 25,
    mon: "يوليو",
    text: "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً",
    subtitle:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص",
  },
  {
    id: 2,
    num: 25,
    mon: "يوليو",
    text: "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً",
    subtitle:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص",
  },
  {
    id: 3,
    num: 25,
    mon: "يوليو",
    text: "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً",
    subtitle:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص",
  },
];

const News = () => {
  return (
    <div className={classes.news}>
      <h2>آخر أخبار الدكتور</h2>
      <Container>
        {lastnews.map((item) => {
          return (
            <div key={item.id} className={classes["news-item"]}>
              <div className={classes.box}>
                <div className={classes.date}>
                  <p className={classes.num}>{item.num}</p>
                  <p className={classes.mon}>{item.mon}</p>
                </div>
                <div className={classes.inside}>
                  <p>{item.text}</p>
                  <h5>{item.subtitle}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default News;
