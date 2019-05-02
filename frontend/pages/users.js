import React from 'react';
import Users from '../components/Users';
import UserPermissions from '../components/UserPermissions';

const parts = (props) => {
  return (
    <>
      <Users />
      <UserPermissions />
    </>
  );
};

export default parts;