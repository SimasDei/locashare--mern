import React from 'react';

import './UsersList.styles.scss';

import UserItem from './UserItem.component';

const UsersList = ({ items }) => {
  if (!items.length)
    return (
      <div class='center'>
        <h2>No Users found</h2>
      </div>
    );
  return (
    <ul>
      {items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
