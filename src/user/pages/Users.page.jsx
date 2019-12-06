import React from 'react';

import UsersList from '../components/UsersList.component';

import users from './users.data';

const Users = () => {
  return <UsersList items={users} />;
};

export default Users;
