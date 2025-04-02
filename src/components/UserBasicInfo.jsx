import React from 'react';

const UserBasicInfo = ({ name, email }) => (
  <div>
    <h2>User Profile</h2>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </div>
);

export default UserBasicInfo;