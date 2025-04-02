import React from 'react';
import UserProfile from './UserProfile ';

const Component4 = () => {
  const user1 = {
    name: 'John Doe',
    email: 'john@example.com',
    billingInfo: 'Visa ending in 1234',
    activityHistory: ['Logged in', 'Viewed dashboard', 'Logged out']
  };

  const user2 = {
    name: 'Jane Smith',
    email: 'jane@example.com',
    billingInfo: null, // No información de facturación
    activityHistory: [] // Sin historial de actividad
  };

  return (
    <div>
      <h1>User Profiles</h1>
      <UserProfile {...user1} />
      <UserProfile {...user2} />
    </div>
  );
};

export default Component4;