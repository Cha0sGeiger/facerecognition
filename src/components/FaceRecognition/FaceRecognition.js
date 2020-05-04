import React from "react";
import classes from "./FaceRecognition.module.scss";

const FaceRecognition = () => {
  return (
    <div className={classes.page}>
      <div className={classes.column_center}>
        <img alt='' src={"https://samples.clarifai.com/metro-north.jpg"}></img>
      </div>
    </div>
  );
};

export default FaceRecognition;
