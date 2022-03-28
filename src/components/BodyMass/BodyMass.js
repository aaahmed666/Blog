import React from "react";
import BodyMassForm from "./BodyMassForm";
import BodyMassTable from "./BodyMassTable";
import classes from "./BodyMass.module.css";
import { Container } from "react-bootstrap";

const BodyMass = (props) => {
  const onBodyIndex = (bmi) => {
    props.onBodyIndex(bmi);
  };

  return (
    <div className={classes.divid}>
      <Container>
        <div className={classes.cut}>
          <BodyMassForm onBodyIndex={onBodyIndex} />
          <BodyMassTable />
        </div>
      </Container>
    </div>
  );
};

export default BodyMass;
