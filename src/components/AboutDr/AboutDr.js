import React from "react";
import { Container } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import image from "../../assets/about.png";

import classes from "./AboutDr.module.css";

const about = [
  {
    id: 1,
    info: "معلومات عن",
    title: "أ.د. محمود زكريا الجنروري",
    subtitle: [
      {
        id: 2,
        text: "أستاذ جراحات السمنة و السكر (جامعة عين شمس)دكتور -محمود-الجنزورى",
      },
      { id: 3, text: "عضو المنظمة الدولية لجراحى السمنة المفرطة" },
      { id: 4, text: "عضو كلية الجراحين الملكية بلندن (إنجلترا)" },
      { id: 5, text: "عضو الجمعية المصرية و الأوربية لجراحة المناظير" },
      { id: 6, text: "دكتوراة الجراحة و المناظير (جامعة عين شمس)" },
      {
        id: 7,
        text: "تلقي تدريب بمستشفي جامعة داندى بالمملكة المتحدة البريطانية علي جراحات مناظير الجهاز الهضمى المتقدم",
      },
      {
        id: 8,
        text: "تلقى تدريب على جراحات السمنة بالمنظار بمراكز متخصصة بكل من(فرنسا - النمسا - هولندا - بلجيكا - تركيا)",
      },
    ],
    icon: <FaCheckCircle />,
    button: "المزيد عن الدكتور",
  },
];

const AboutDr = () => {
  return (
    <React.Fragment>
      <div className={classes["about-dr"]}>
        <Container>
          <div className={classes.slice}>
            <div className={classes["dr-image"]}>
              <img src={image} alt="Dr Mahmoud" />
            </div>
            {about.map((item) => {
              return (
                <div className={classes["dr-content"]} key={item.id}>
                  <div className={classes.information}>
                    <span>{item.info}</span>
                  </div>
                  <h2>{item.title}</h2>
                  <ul className={classes.list}>
                    {item.subtitle.map((el) => {
                      return (
                        <li key={el.id}>
                          {item.icon}
                          <span>{el.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <a href="/#" className={classes.action}>
                    {item.button}
                  </a>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AboutDr;
