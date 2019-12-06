import React from 'react';

import './UserItem.styles.scss';

const UserItem = ({ id, image, name, placeCount }) => {
  return (
    <li className='user-item'>
      <div className='user-item__content'>
        <div className='user-item__image'>
          <img src={image} alt={name} />
        </div>
        <div className='user-item__info'>
          <h2>{name}</h2>
          <h3>
            {placeCount} {placeCount === 1 ? 'place' : 'places'}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
