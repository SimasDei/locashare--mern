import React, { useReducer } from 'react';

import './Input.css';

const actionTypes = {
  CHANGE: 'CHANGE',
};

const inputReducer = (state, { type, value }) => {
  switch (type) {
    case actionTypes.CHANGE:
      return {
        ...state,
        value,
        isValid: true,
      };
    default:
      return state;
  }
};

const initialState = {
  value: '',
  isValid: false,
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  const handleChange = event => {
    const {
      target: { value },
    } = event;
    dispatch({ type: actionTypes.CHANGE, value });
  };

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={handleChange}
        value={inputState.value}
      />
    );

  const { id, label, errorText } = props;
  const { isValid } = inputState;
  return (
    <div className={`form-control ${!isValid && 'form-control--invalid'}`}>
      <label htmlFor={id}>{label}</label>
      {element}
      {!isValid && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
