import { useRef, useState, useImperativeHandle, forwardRef, useEffect } from "react";
import "./Input.scss";

const isEmtry = (input) => {
  return input?.trim().length > 0
};

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();
  const [inputValidate, setInputValidate] = useState(null);

  useImperativeHandle(ref, () => ({
    onParentsSubmit() {
      const checkValidate = isEmtry(inputRef.current?.value);
      setInputValidate(checkValidate);
      props.validateData(inputValidate)
    }
  }));

  const changeInput = () => {
    const checkValidate = isEmtry(inputRef.current?.value);
    setInputValidate(checkValidate);
    props.onChangeValue(inputValidate)
  }

  const onBlurHandlerInput = (inputRef) => {
    const checkValidate = isEmtry(inputRef.current?.value);
    setInputValidate(checkValidate);
    props.validateData(inputValidate)
  };

  return (
    <div className={`input-container ${inputValidate === null || inputValidate ? "" : "error"}`}>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type="text"
        id={props.name}
        ref={inputRef}
        onChange={changeInput}
        onBlur={onBlurHandlerInput.bind(this, inputRef)}
      />
      {inputValidate === null || inputValidate ? <></> : <span>Please fill your {props.name}</span>}
    </div>
  );
});

export default Input;
