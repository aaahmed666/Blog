import React, { useRef } from "react";
import image1 from "../../assets/shape7.png";
import image2 from "../../assets/shape6.png";
import image3 from "../../assets/shape5.png";
import image4 from "../../assets/shape4.png";
import image5 from "../../assets/shape3.png";
import image6 from "../../assets/shape2.png";
import image7 from "../../assets/shape1.png";
import "./BodyFit.css";

const BodyFit = (props) => {
  const removeShow = useRef();
  console.log(props.item);

  let tall = props.item.tall;
  let weight = props.item.weight;

  console.log(tall, weight);

  let resualt = (weight / ((tall * tall) / 10000)).toFixed(2);
  console.log(resualt);

  let bmi = "";
  // let BodyFitness = "BodyFit";

  if (resualt < 18.5) {
    bmi = "تحت الوزن الطبيعي";
    // BodyFitness = "BodyFit show";
    // removeShow.current.classList.add("show");
  }
  if (resualt >= 18.5 && resualt < 24.99) {
    bmi = "الوزن الطبيعي";
    // BodyFitness = "BodyFit show";
    // removeShow.current.classList.add("show");
  }
  if (resualt >= 25 && resualt < 29.99) {
    bmi = "وزن زائد";
    // BodyFitness = "BodyFit show";
    // removeShow.current.classList.add("show");
  }
  if (resualt >= 30 && resualt < 34.99) {
    bmi = "سمنة من الدرجة الأولى";
    // BodyFitness = "BodyFit show";
    // removeShow.current.classList.add("show");
  }
  if (resualt >= 35 && resualt < 39.99) {
    bmi = "سمنة مرضية الثانية";
    // BodyFitness = "BodyFit show";
    // removeShow.current.classList.add("show");
  }
  if (resualt >= 40 && resualt < 49.99) {
    bmi = "سمنة مرضية مفرطة";
    // BodyFitness = "BodyFit show";
    // removeShow.current.classList.add("show");
  }
  if (resualt > 50) {
    bmi = "سمنة فوق المفرطة";
    // BodyFitness = "BodyFit show";
    // removeShow.current.classList.add("show");
  }

  console.log(bmi);

  let side1 = resualt < 18.5 ? "shape active" : "shape";
  let side2 = resualt >= 18.5 && resualt < 24.99 ? "shape active" : "shape";
  let side3 = resualt >= 25 && resualt < 29.99 ? "shape active" : "shape";
  let side4 = resualt >= 30 && resualt < 34.99 ? "shape active" : "shape";
  let side5 = resualt >= 35 && resualt < 39.99 ? "shape active" : "shape";
  let side6 = resualt >= 40 && resualt < 49.99 ? "shape active" : "shape";
  let side7 = resualt > 50 ? "shape active" : "shape";

  console.log(resualt);

  let addCloseHandler = () => {
    removeShow.current.classList.remove("show");
    document.body.classList.remove("ovh");
  };

  if (resualt < 18.5) {
    removeShow.current.classList.add("show");
  }
  if (resualt >= 18.5 && resualt < 24.99) {
    removeShow.current.classList.add("show");
  }
  if (resualt >= 25 && resualt < 29.99) {
    removeShow.current.classList.add("show");
  }
  if (resualt >= 30 && resualt < 34.99) {
    removeShow.current.classList.add("show");
  }
  if (resualt >= 35 && resualt < 39.99) {
    removeShow.current.classList.add("show");
  }
  if (resualt >= 40 && resualt < 49.99) {
    removeShow.current.classList.add("show");
  }
  if (resualt > 50) {
    removeShow.current.classList.add("show");
  }

  return (
    <React.Fragment>
      <div ref={removeShow} onClick={addCloseHandler} className="BodyFit">
        <div className="content">
          <div className="resualt">
            <h3>حاله الجسم</h3>
            <h2>{bmi}</h2>
            <p>
              مؤشر كتلة الجسم هو:
              <span>{resualt}</span>
            </p>
          </div>
          <div className="shapes">
            <div className={side1}>
              <img src={image1} alt="" />
            </div>
            <div className={side2}>
              <img src={image2} alt="" />
            </div>
            <div className={side3}>
              <img src={image3} alt="" />
            </div>
            <div className={side4}>
              <img src={image4} alt="" />
            </div>
            <div className={side5}>
              <img src={image5} alt="" />
            </div>
            <div className={side6}>
              <img src={image6} alt="" />
            </div>
            <div className={side7}>
              <img src={image7} alt="" />
            </div>
          </div>
          <div className="ibw">
            <h3>الوزن المثالي المناسب لطولك</h3>
            <p>
              مدى وزنك الطبيعي يجب أن لا يقل عن <span>89.5 كجم</span> وأن لا
              يزيد عن
              <span>121 كجم</span>
            </p>
            <p>
              للوصول إلى مدى الوزن الطبيعي يجب عليك انقاص وزنك حوالي
              <span>-51 كجم</span>
            </p>
            <p>
              معدل أفضل وزن مثالي لك هو <span>105.25 كجم</span>
            </p>
          </div>
          <section className="calories">
            <h3 className="heading">فحص السعرات الحرارية</h3>
            <p>
              معدل الأيض الأساسي لجسمك في حالة الراحة التامة
              <span>1930 سعر حراري</span>
            </p>
            <p>
              انت تحتاج تناول اغذية تحتوي على <span>2316 سعر حراري</span> يومياً
              للحفاظ على وزنك كما هو في مستوى النشاط كثير الجلوس
            </p>
          </section>
          <section className="plans">
            <h3 className="heading">خطط انقاص الوزن المناسبة لجسمك</h3>
            <p>
              <u>الخطة الأولى:</u> يمكنك انقاص وزنك حوالي <span>0.225 كجم</span>
              اسبوعياً عن طريق تناول <span>2066 سعر حراري</span>.
            </p>
            <p>
              <u>الخطة الثانية:</u> يمكنك انقاص وزنك حوالي <span>0.45 كجم</span>
              اسبوعياً عن طريق تناول <span>1816 سعر حراري</span>.
            </p>
            <p>
              <u>الخطة الثالثة:</u> يمكنك انقاص وزنك حوالي <span>0.9 كجم</span>
              اسبوعياً عن طريق تناول <span>1316 سعر حراري</span>.
            </p>
          </section>
          <button onClick={addCloseHandler} className="close-modal">
            العودة للرئيسية
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BodyFit;
