import React from 'react';
import { useParams } from 'react-router-dom';

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hooks';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u2',
  },
];

const UpdatePlace = () => {
  const { placeId } = useParams();
  const place = DUMMY_PLACES.find(place => place.id === placeId);
  const { title, description, address } = place;

  const initialState = {
    title: {
      value: title,
      isValid: true,
    },
    description: {
      value: description,
      isValid: true,
    },
    address: {
      value: address,
      isValid: true,
    },
  };

  const [formState, handleInput] = useForm(initialState);

  if (!place)
    return (
      <Card>
        <h2>Place not found</h2>
      </Card>
    );

  const handleUpdatePlace = e => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className='place-form' onSubmit={handleUpdatePlace}>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
        initialValue={formState.inputs.title.value}
        initialIsValid={formState.inputs.title.isValid}
        onInput={handleInput}
      />
      <Input
        id='description'
        element='textarea'
        type='text'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description, 5 character minimum'
        initialValue={formState.inputs.description.value}
        initialIsValid={formState.inputs.description.isValid}
        onInput={handleInput}
      />
      <Button type='submit' disabled={!formState.isValid}>
        Update place
      </Button>
    </form>
  );
};

export default UpdatePlace;
