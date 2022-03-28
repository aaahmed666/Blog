import React, { useRef, useState } from "react";
import UnstyledSelectSimple from "./UnstyledSelectSimple";
import classes from "./BodyMassForm.module.css";
import { Container } from "react-bootstrap";
import SelectComponent from "./SelectComponent";

const BodyMassForm = (props) => {
  const weightRef = useRef("");
  const tallRef = useRef("");
  const ageRef = useRef("");

  // const [errorweight, setErrorWeight] = useState(false);
  // const [errortall, setErrorTall] = useState(false);
  // const [errorage, setErrorAge] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (
      tallRef.current.value !== "" &&
      weightRef.current.value !== "" &&
      ageRef.current.value !== ""
    ) {
      document.body.classList.add("ovh");
      // setErrorTall(false);
      // setErrorWeight(false);
      // setErrorAge(false);
    }

    const bmi = {
      weight: weightRef.current.value,
      tall: tallRef.current.value,
    };

    console.log(bmi);

    props.onBodyIndex(bmi);

    // setErrorWeight("");
    // setErrorAge("");
    // setErrorTall("");
    weightRef.current.value = "";
    tallRef.current.value = "";
  };

  return (
    <div className={classes.bodyForm}>
      <Container>
        <h2>حساب مؤشر كتلة الجسم</h2>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.group}>
            <label htmlFor="weight">أدخل وزنك بالكيلو غرام</label>
            <input type="number" id="weight" ref={weightRef} min="1" />
            {/* <p>{errorweight}</p> */}
          </div>
          <div className={classes.group}>
            <label htmlFor="tall">أدخل طولك بالسنتيمتر</label>
            <input type="number" id="tall" ref={tallRef} min="1" />
            {/* <p>{errortall}</p> */}
          </div>
          <div className={classes.group}>
            <label htmlFor="life">أدخل عمرك</label>
            <input type="number" id="life" ref={ageRef} min="1" />
            {/* <p>{errorage}</p> */}
          </div>
          <div className={classes.group}>
            <label htmlFor="gender">الجنس</label>
            <UnstyledSelectSimple />
          </div>
          <div className={classes.group}>
            <label htmlFor="activity">مستوي النشاط</label>
            <SelectComponent />
          </div>
          <div className={classes.controls}>
            <button className={classes["submit-btn"]} type="submit">
              احسب
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default BodyMassForm;
