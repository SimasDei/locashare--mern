import React from 'react';

import PlaceList from '../components/PlaceList.component';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Death Star',
    description: 'Fully operational battle station',
    imageUrl:
      'https://fsmedia.imgix.net/3b/7d/19/fd/c04a/433f/a655/c948156c9518/death-star.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&dpr=2&h=325&w=650',
    address: '359 Queen St, Brisbane City QLD 4000, Australia',
    location: {
      lat: -27.466556,
      lng: 153.0274163,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Death Star',
    description: 'Fully operational battle station',
    imageUrl:
      'https://fsmedia.imgix.net/3b/7d/19/fd/c04a/433f/a655/c948156c9518/death-star.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&dpr=2&h=325&w=650',
    address: '359 Queen St, Brisbane City QLD 4000, Australia',
    location: {
      lat: -27.466556,
      lng: 153.0274163,
    },
    creator: 'u2',
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
