import React from 'react';

const NotificationComponent = ({ notificationService, message }) => {
  const send = () => {
    notificationService.sendNotification(message);
  };

  return (
    <div>
      <h2>Notification Component</h2>
      <button onClick={send}>Send Notification</button>
    </div>
  );
};

export default NotificationComponent;