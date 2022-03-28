import React from "react";
import classes from "./LinkCard.module.css";

const LinkCard = (props) => {
  const copyHandler = (e) => {
    const copyText = props.shrt;
    navigator.clipboard.writeText(copyText);
    e.target.classList.add(classes["copied"]);
    e.target.textContent = "Copied!";
  };
  return (
    <div className={classes.cardContainer}>
      <p className={classes.original}>{props.url}</p>
      <div className={classes.wrap}>
        <p className={classes.short} id="shortLink">
          {props.shrt}
        </p>
        <button className={classes.copyBtn} onClick={copyHandler}>
          Copy
        </button>
      </div>
    </div>
  );
};

export default LinkCard;
