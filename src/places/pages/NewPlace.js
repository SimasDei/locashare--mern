import React, { useCallback } from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/components/util/validators';
import './NewPlace.css';

const NewPlace = () => {
  const handleTitleInput = useCallback((id, value, isValid) => {}, []);
  const handleDescriptionInput = useCallback((id, value, isValid) => {}, []);

  return (
    <form className='place-form'>
      <Input
        id='title'
        type='text'
        label='Title'
        element='input'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
        onInput={handleTitleInput}
      />
      <Input
        id='description'
        type='text'
        label='Description'
        element='textarea'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description, at least 5 characters'
        onInput={handleDescriptionInput}
      />
    </form>
  );
};

export default NewPlace;
