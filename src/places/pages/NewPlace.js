import React from 'react';

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hooks';
import './NewPlace.css';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';

const initialState = {
  inputs: {
    title: { value: '', isValid: false },
    description: { value: '', isValid: false },
    address: { value: '', isValid: false },
  },
  isValid: false,
};

const NewPlace = () => {
  const [formState, handleInput] = useForm(initialState.inputs, initialState.isValid);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className='place-form' onSubmit={handleSubmit}>
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
        label='Description'
        element='textarea'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description, at least 5 characters'
        onInput={handleInput}
      />
      <Input
        id='address'
        type='text'
        label='address'
        element='input'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid address, at least 5 characters'
        onInput={handleInput}
      />
      <Button type='submit' disabled={!formState.isValid}>
        Add place
      </Button>
    </form>
  );
};

export default NewPlace;
