import { useRef, useState, useImperativeHandle, forwardRef } from "react";
import "./Input.scss";

const isEmtry = (input) => {
  return input?.trim().length > 0
};

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();
  const [inputValidate, setInputValidate] = useState(null);

  useImperativeHandle(ref, () => ({
    onParentsSubmit() {
      checkValidate()
      props.onChangeValue(props.id, inputRef.current?.value, inputValidate);
    }
  }));

  const checkValidate = () => {
    const checkValidate = isEmtry(inputRef.current?.value);
    setInputValidate(checkValidate);
  }

  const changeInput = () => {
    checkValidate()
    props.onChangeValue(props.id, inputRef.current?.value, inputValidate);
  }

  const onBlurHandlerInput = (inputRef) => {
    const checkValidate = isEmtry(inputRef.current?.value);
    setInputValidate(checkValidate);
    props.onChangeValue(props.id, inputRef.current?.value, inputValidate);
  };

  return (
    <div className={`input-container ${inputValidate === null || inputValidate ? "" : "error"}`}>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        type="text"
        id={props.id}
        ref={inputRef}
        onChange={changeInput}
        onBlur={onBlurHandlerInput.bind(this, inputRef)}
      />
      {inputValidate === null || inputValidate ? <></> : <span>Please fill your {props.name}</span>}
    </div>
  );
});

export default Input;
