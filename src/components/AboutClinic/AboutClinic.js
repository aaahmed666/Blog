import React from "react";
import classes from "./AboutClinic.module.css";
import image from "../../assets/full1.png";
import {
  FaStethoscope,
  FaRegCalendarAlt,
  FaCalendarCheck,
  FaShieldAlt,
} from "react-icons/fa";
import { Container } from "react-bootstrap";

const clinic = [
  {
    id: 1,
    title: "معلومات عن مركز الدكتور محمود",
    desc: "يتميز مركز د.محمود الجنزوري بالإلتزام فى المواعيد و أعلى معايير من النظافة و الأمان كما تشمل اطباء الجراحة و اطباء التخدير و اطباء التغذية العلاجية",
    features: [
      {
        id: 2,
        featicon: <FaStethoscope />,
        feattitle: "الطاقم المحترف",
        featsubtitle:
          "طاقم طبى محترف للعناية بالمرضى قبل وبعد العملية، اطباء تغذية وتخدير، ويمكنك إرسال كافة الفحوصات والرد عليها فوراً",
      },
      {
        id: 3,
        featicon: <FaRegCalendarAlt />,
        feattitle: "جدول مواعيد مرن",
        featsubtitle:
          "يتميز مركز د.محمود الجنزوري باحدث طرق الحجز ومواعيد مرنه لمرضانا، كما يمكنك إستشارة الدكتور والتحدث معه اونلاين",
      },
      {
        id: 4,
        featicon: <FaCalendarCheck />,
        feattitle: "أسهل طرق الحجز",
        featsubtitle:
          "يمكنك الحجز عن طريق الموقع أو صفحات التواصل وإرسال إستفساراتك كما سيقوم  أفراد الطاقم بالرد فورا على إستفساراتكم",
      },
      {
        id: 5,
        featicon: <FaShieldAlt />,
        feattitle: "أعلى معدلات الجودة و الأمان",
        featsubtitle:
          "فى عيادات د.محمود الجنزوري ستجد معانا أعلى درجات الأمان والعناية بصحتك",
      },
    ],
    button: "المزيد عن المركز",
  },
];

const AboutClinic = () => {
  return (
    <div className={classes["about-clinic"]}>
      <Container>
        <div className={classes.slice}>
          {clinic.map((item) => {
            return (
              <div className={classes["clinic-content"]} key={item.id}>
                <div className={classes.content}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
                <div className={classes.feature}>
                  {item.features.map((el) => {
                    return (
                      <div key={el.id}>
                        <div className={classes.feat}>
                          <div className={classes["feat-icon"]}>
                            {el.featicon}
                          </div>
                          <h3>{el.feattitle}</h3>
                          <p>{el.featsubtitle}</p>
                        </div>
                      </div>
                    );
                  })}
                  <a href="/#" className={classes["more-btn"]}>
                    {item.button}
                  </a>
                </div>
              </div>
            );
          })}
          <div className={classes["image-clinic"]}>
            <span>
              <img src={image} alt="Clinic" />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutClinic;
