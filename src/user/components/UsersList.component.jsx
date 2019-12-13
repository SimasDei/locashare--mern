import React from 'react';

import './UsersList.styles.css';

import UserItem from './UserItem.component';
import Card from '../../shared/components/UIElements/Card/Card.component';

const UsersList = ({ items }) => {
  if (!items.length)
    return (
      <div class='center'>
        <Card>
          <h2>No Users found</h2>
        </Card>
      </div>
    );
  return (
    <ul className='users-list'>
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
