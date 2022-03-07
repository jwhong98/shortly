import React, { useState, useEffect } from "react";
import LinkCard from "./LinkCard";
import classes from "./URLInput.module.css";

const URLInput = (props) => {
  const [link, setLink] = useState("");
  const [shortened, setShortened] = useState([]);

  // useEffect(() => {
  //   const list = localStorage.getItem('shortened');

  // })

  const submitHandler = (e) => {
    e.preventDefault();
    if (link === "") {
      alert("invalid");
    } else {
      const url = "https://api.shrtco.de/v2/shorten?url=" + link;
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          console.log(shortened);
          let short = result.result.short_link;
          const shortObj = {
            id: Math.random().toString(),
            url: link,
            shrt: short,
          };
          setShortened((prevArr) => [...prevArr, shortObj]);
        });
    }
  };

  const createLinkCard = (info) => {
    return <LinkCard key={info.id} url={info.url} shrt={info.shrt} />;
  };

  return (
    <section className={classes.inputSection}>
      <div className={classes.inputSectionContainer}>
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            className={classes.formInput}
            placeholder="Shorten a link here..."
            onChange={(e) => setLink(e.target.value)}
          />
          <div className={classes.buttonContainer}>
            <button type="submit">Shorten It!</button>
          </div>
        </form>
      </div>
      <div className={classes.shortList}>{shortened.map(createLinkCard)}</div>
    </section>
  );
};

export default URLInput;
