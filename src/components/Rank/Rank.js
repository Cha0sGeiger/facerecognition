import React from "react";
import classes from "./Rank.module.scss";

const Rank = () => {
  return (
    <div className={classes.page}>
      <div>{`Vjeko, your current rank is....`}</div>
      <div>{`#3`}</div>
    </div>
  );
};

export default Rank;
