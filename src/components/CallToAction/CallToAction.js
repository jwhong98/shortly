import React from "react";
import Button from "../Button/Button";
import classes from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <section className={classes.callToAction}>
      <div className={classes.callContainer}>
        <h3>Boost your links today</h3>
        <Button />
      </div>
    </section>
  );
};

export default CallToAction;
