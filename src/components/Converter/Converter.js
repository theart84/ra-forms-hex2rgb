import { useState } from "react";
import { hexToRgbConverter } from "../../utils/hexToRgbConverter";

import classes from "./Converter.module.css";

const Converter = () => {
  const [hexInput, setHexInput] = useState("");
  const [rgbOutput, setRgbOutput] = useState("rgb(255, 255, 255)");

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setHexInput(value);
    let result = "rgb(..., ..., ...)";
    if (value.length === 7) {
      result = hexToRgbConverter(value) || "Error";
    } else if (value.length > 7) {
      result = "Error";
    }
    setRgbOutput(result);
  };

  const classBackgroundColor = {
    backgroundColor: rgbOutput !== "Error" ? rgbOutput : "red",
  };

  return (
    <div className={classes.wrapper} style={classBackgroundColor}>
      <div className={classes.converter}>
        <div>
          <input
            className={classes["input-field"]}
            type="text"
            onChange={onChangeHandler}
            value={hexInput}
          />
        </div>
        <div>
          <p className={classes["converter-field"]}>{rgbOutput}</p>
        </div>
      </div>
    </div>
  );
};

export default Converter;
