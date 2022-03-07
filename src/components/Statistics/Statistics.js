import React, { useState, useEffect } from "react";
import classes from "./Statistics.module.css";
import { data } from "./data";
import Card from "./Card";

const Statistics = (props) => {
  // const url = "https://api.shrtco.de/v2/shorten?url=" + props.link;
  // const [returnedData, setReturnedData] = useState([]);

  // useEffect(() => {
  //   console.log(url);
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       let short = result.result.short_link;
  //       setReturnedData(short);
  //       console.log(returnedData);
  //     });
  // }, []);

  const createCard = (info) => {
    return (
      <Card
        key={info.id}
        img={info.img}
        title={info.title}
        description={info.description}
      />
    );
  };
  return (
    <section className={classes.statistics}>
      <div className={classes.statsContainer}>
        <div className={classes.history}></div>
        <div className={classes.statsTextWrap}>
          <h3>Advanced Statistics</h3>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>
        <div className={classes.dataWrap}>
          <div className={classes.line}></div>
          {data.map(createCard)}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
