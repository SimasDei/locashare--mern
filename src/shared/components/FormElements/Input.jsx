import React, { useReducer, useEffect } from 'react';

import { validate } from '../util/validators';
import './Input.css';

const actionTypes = {
  CHANGE: 'CHANGE',
  TOUCH: 'TOUCH',
};

const initialState = {
  value: '',
  isValid: false,
  isTouched: false,
};

const inputReducer = (state, { type, value, validators }) => {
  switch (type) {
    case actionTypes.CHANGE:
      return {
        ...state,
        value,
        isValid: validate(value, validators),
      };
    case actionTypes.TOUCH:
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  const { id, label, errorText, validators, type, placeholder, rows, onInput } = props;
  const { isValid, isTouched, value } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const handleChange = event => {
    const {
      target: { value },
    } = event;
    dispatch({ type: actionTypes.CHANGE, value, validators });
  };

  const handleTouch = () => {
    dispatch({ type: 'TOUCH' });
  };

  const element =
    props.element === 'input' ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        onBlur={handleTouch}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={handleChange}
        value={value}
        onBlur={handleTouch}
      />
    );

  return (
    <div className={`form-control ${!isValid && isTouched && 'form-control--invalid'}`}>
      <label htmlFor={id}>{label}</label>
      {element}
      {!isValid && isTouched && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
