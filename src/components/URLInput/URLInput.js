import React from "react";
import classes from "./URLInput.module.css";

const URLInput = () => {
  return (
    <section className={classes.inputSection}>
      <div className={classes.inputSectionContainer}>
        <form action="">
          <input
            type="text"
            className={classes.formInput}
            placeholder="Shorten a link here..."
          />
          <div className={classes.buttonContainer}>
            <button>Shorten It!</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default URLInput;
