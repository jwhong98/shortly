import React from "react";
import classes from "./Hero.module.css";
import img from "../../images/illustration-working.svg";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.heroContainer}>
        <div className={classes.heroTextWrap}>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button />
        </div>
        <div className={classes.heroImgWrap}>
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
