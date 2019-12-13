import { useCallback, useReducer } from 'react';

const actionTypes = {
  CHANGE: 'CHANGE',
  TOUCH: 'TOUCH',
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

export const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const handleInput = useCallback((id, value, isValid) => {
    dispatch({ type: actionTypes.INPUT_CHANGE, value, isValid, inputId: id });
  }, []);

  return [formState, handleInput];
};
