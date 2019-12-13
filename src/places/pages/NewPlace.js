import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/components/util/validators';
import Button from '../../shared/components/FormElements/Button';
import './NewPlace.css';

const actionTypes = {
  INPUT_CHANGE: 'INPUT_CHANGE',
};

const formReducer = (state, action) => {
  const { type, isValid, value, inputId } = action;
  const { inputs } = state;
  switch (type) {
    case actionTypes.INPUT_CHANGE:
      let formIsValid = true;
      for (const inputId in inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && isValid;
        } else {
          formIsValid = formIsValid && inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [inputId]: { value, isValid },
        },
        isValid: formIsValid,
      };

    default:
      return state;
  }
};

const initialState = {
  inputs: {
    title: { value: '', isValid: false },
    description: { value: '', isValid: false },
  },
  isValid: false,
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleInput = useCallback((id, value, isValid) => {
    dispatch({ type: actionTypes.INPUT_CHANGE, value, isValid, inputId: id });
  }, []);

  return (
    <form className='place-form'>
      <Input
        id='title'
        type='text'
        label='Title'
        element='input'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
        onInput={handleInput}
      />
      <Input
        id='description'
        type='text'
        label='Description'
        element='textarea'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description, at least 5 characters'
        onInput={handleInput}
      />
      <Button type='submit' disabled={!formState.isValid}>
        Add place
      </Button>
    </form>
  );
};

export default NewPlace;
