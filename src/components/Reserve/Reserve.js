import React, { useState } from "react";
import classes from "./Reserve.module.css";
import { Container } from "react-bootstrap";

const Reserve = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredAge, setEnteredAge] = useState("");
  const [enteredAgeTouched, setEnteredAgeTouched] = useState(false);

  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredPhoneTouched, setEnteredPhoneTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredMSG, setEnteredMSG] = useState("");
  const [enteredMSGTouched, setEnteredMSGTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const inputNameIsValid = !enteredNameIsValid && enteredNameTouched;

  const enteredAgeIsValid = enteredAge.trim() !== "";
  const inputAgeIsValid = !enteredAgeIsValid && enteredAgeTouched;

  const enteredPhoneIsValid = enteredPhone.trim() !== "";
  const inputPhoneIsValid = !enteredPhoneIsValid && enteredPhoneTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const inputEmailIsValid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredMSGIsValid = enteredMSG.trim() !== "";
  const inputMSGIsValid = !enteredMSGIsValid && enteredMSGTouched;

  let formISValid = false;

  if (
    enteredNameIsValid &
    enteredAgeIsValid &
    inputPhoneIsValid &
    enteredEmailIsValid &
    enteredMSGIsValid
  ) {
    formISValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const phoneInputChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const msgInputChangeHandler = (event) => {
    setEnteredMSG(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const ageInputBlurHandler = (event) => {
    setEnteredAgeTouched(true);
  };

  const phoneInputBlurHandler = (event) => {
    setEnteredPhoneTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const msgInputBlurHandler = (event) => {
    setEnteredMSGTouched(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredAgeTouched(true);
    setEnteredPhoneTouched(true);
    setEnteredEmailTouched(true);
    setEnteredMSGTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredAgeIsValid) {
      return;
    }

    if (!enteredPhoneIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    if (!enteredMSGIsValid) {
      return;
    }

    const booking = {
      name: enteredName,
      age: enteredAge,
      phone: enteredPhone,
      email: enteredEmail,
      message: enteredMSG,
    };

    props.onAddBooking(booking);

    console.log(enteredName);

    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredAge("");
    setEnteredAgeTouched(false);

    setEnteredPhone("");
    setEnteredPhoneTouched(false);

    setEnteredEmail("");
    setEnteredEmailTouched(false);

    setEnteredMSG("");
    setEnteredMSGTouched(false);
  };

  return (
    <div id="Booking" className={classes.booking}>
      <Container>
        <div className={classes["booking-form"]}>
          <h2 className={classes.title}>احجز موعد بكل سهولة</h2>
          <form onSubmit={onSubmitHandler} className={classes["form-action"]}>
            <div className={classes.full}>
              <div className={classes["form-group"]}>
                <label htmlFor="fullname">الاسم بالكامل</label>
                <input
                  type="text"
                  id="fullname"
                  value={enteredName}
                  onChange={nameInputChangeHandler}
                  onBlur={nameInputBlurHandler}
                />
                {inputNameIsValid && (
                  <p className={classes.valid}>هذا الحقل مطلوب</p>
                )}
              </div>
              <div className={classes["form-group"]}>
                <label htmlFor="age">السن</label>
                <input
                  type="text"
                  id="age"
                  value={enteredAge}
                  onChange={ageInputChangeHandler}
                  onBlur={ageInputBlurHandler}
                />
                {inputAgeIsValid && (
                  <p className={classes.valid}>هذا الحقل مطلوب</p>
                )}
              </div>
            </div>
            <div className={classes.full}>
              <div className={classes["form-group"]}>
                <label htmlFor="phone">رقم الهاتف</label>
                <input
                  type="text"
                  id="phone"
                  value={enteredPhone}
                  onChange={phoneInputChangeHandler}
                  onBlur={phoneInputBlurHandler}
                />
                {inputPhoneIsValid && (
                  <p className={classes.valid}>هذا الحقل مطلوب</p>
                )}
              </div>
              <div className={classes["form-group"]}>
                <label htmlFor="email">البريد الالكتروني</label>
                <input
                  type="email"
                  id="email"
                  value={enteredEmail}
                  onChange={emailInputChangeHandler}
                  onBlur={emailInputBlurHandler}
                />
                {inputEmailIsValid && (
                  <p className={classes.valid}>هذا الحقل مطلوب</p>
                )}
              </div>
            </div>
            <div className={classes["form-text"]}>
              <label htmlFor="message">الرسالة</label>
              <textarea
                type="text"
                rows="5"
                id="message"
                value={enteredMSG}
                onChange={msgInputChangeHandler}
                onBlur={msgInputBlurHandler}
              />
              {inputMSGIsValid && (
                <p className={classes.valid}>هذا الحقل مطلوب</p>
              )}
            </div>
            <div className={classes.submit}>
              <button disabled={formISValid} type="submit">
                إرسال
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Reserve;
