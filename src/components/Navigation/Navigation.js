import React from "react";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={classes.page}>
      <nav className={classes.content}>
        <p className={classes.link}>Sign Out</p>
      </nav>
    </div>
  );
};

export default Navigation;
