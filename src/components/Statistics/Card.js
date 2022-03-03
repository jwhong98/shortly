import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.imgContainer}>
        <img src={props.img} alt="icon" />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
