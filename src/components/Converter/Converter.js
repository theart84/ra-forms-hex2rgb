import {useState} from "react";
import {hetToRgbConverter} from "../../utils/hetToRgbConverter";

import classes from './Converter.module.css';

const Converter = () => {
  const [hexInput, setHexInput] = useState('');
  const [rgbOutput, setRgbOutput] = useState("rgb(255, 255, 255)");

  const onChangeHandler = (event) => {
    const {value} = event.target;
    setHexInput(value);
    if (value.length === 7) {
      const result = hetToRgbConverter(value);
      if (result) {
        setRgbOutput(`rgb(${result.r}, ${result.g}, ${result.b})`);
      } else {
        setRgbOutput('Error');
      }
    }
  }

  const classBackgroundColor = {
    backgroundColor: rgbOutput !== 'Error' ? rgbOutput : 'red'
  }

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
}

export default Converter;