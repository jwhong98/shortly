import React from "react";
import classes from "./LinkCard.module.css";

const LinkCard = (props) => {
  const copyHandler = () => {
    let copyText = document.getElementById("shortLink");
    navigator.clipboard.writeText(copyText.textContent);
    console.log(copyText.textContent);
    alert(copyText.textContent);
  };
  return (
    <div className={classes.cardContainer}>
      {props.url}
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
