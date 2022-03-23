import React, { useState } from "react";
import LinkCard from "./LinkCard";
import classes from "./URLInput.module.css";

const URLInput = (props) => {
  const [link, setLink] = useState("");
  const [shortened, setShortened] = useState([]);

  const input = document.querySelector("#inputLink");
  const errorMsg = document.querySelector("#error");

  // useEffect(() => {
  //   const list = localStorage.getItem('shortened');

  // })

  const isUrl = (s) => {
    var regexp =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isUrl(link)) {
      input.classList.add(classes["invalid"]);
      errorMsg.style.display = "block";
    } else {
      const url = "https://api.shrtco.de/v2/shorten?url=" + link;
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          let short = result.result.short_link;
          const shortObj = {
            id: Math.random().toString(),
            url: link,
            shrt: short,
          };
          input.classList.remove(classes["invalid"]);
          errorMsg.style.display = "none";
          setShortened((prevArr) => [...prevArr, shortObj]);
          input.value = "";
          console.log("complete");
        });
    }
  };

  const createLinkCard = (info) => {
    return <LinkCard key={info.id} url={info.url} shrt={info.shrt} />;
  };

  return (
    <section className={classes.inputSection}>
      <div className={classes.inputWrap}>
        <div className={classes.inputSectionContainer}>
          <form action="" onSubmit={submitHandler}>
            <input
              type="text"
              id="inputLink"
              className={classes.formInput}
              placeholder="Shorten a link here..."
              onChange={(e) => setLink(e.target.value)}
            />
            <div className={classes.buttonContainer}>
              <button type="submit">Shorten It!</button>
            </div>
          </form>
          <p className={classes.invalidMessage} id="error">
            Please add a link
          </p>
        </div>
      </div>
      <div className={classes.shortList}>{shortened.map(createLinkCard)}</div>
    </section>
  );
};

export default URLInput;
