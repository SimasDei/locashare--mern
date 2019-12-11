import React from 'react';

import './PlaceList.styles.scss';

import Card from '../../shared/components/UIElements/Card/Card.component';
import PlaceItem from '../components/PlaceItem.component';

const PlaceList = ({ items }) => {
  if (!items.length) {
    return (
      <div className='place-list center'>
        <Card>
          <h2>No places found. Create one ?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className='place-list'>
      {items.map(place => (
        <PlaceItem key={place.id} place={place} />
      ))}
    </ul>
  );
};

export default PlaceList;
