import React from "react";
import classes from "./ImageLinkForm.module.scss";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className={classes.page}>
      <div className={classes.column_center}>
        <p className={classes.upper_text}>
          {"This Magic Brain will detect faces"}
        </p>
        <div className={classes.input_wrapper}>
          <input
            type="text"
            className={classes.text_input}
            onChange={onInputChange}
          ></input>
          <button className={classes.button} onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
