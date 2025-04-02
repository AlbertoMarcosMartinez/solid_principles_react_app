import React from 'react';

const UserActivityHistory = ({ activityHistory }) => (
  <div>
    <h3>Activity History</h3>
    <ul>
      {activityHistory.map((activity, index) => (
        <li key={index}>{activity}</li>
      ))}
    </ul>
  </div>
);

export default UserActivityHistory;