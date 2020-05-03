import React from "react";
import Tilt from "react-tilt";
import Brain from "../../assets/icons/brain.png";
import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={classes.page}>
      <Tilt
        className="Tilt"
        options={{ max: 40 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img alt="logo" src={Brain}></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
