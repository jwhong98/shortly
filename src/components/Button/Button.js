import React from "react";
import classes from "./Button.module.css";

const Button = () => {
  return (
    <div className={classes.buttonContainer}>
      <button className={classes.button}>Get Started</button>
    </div>
  );
};

export default Button;
