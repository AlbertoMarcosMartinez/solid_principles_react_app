import React from 'react';
import NotificationComponent from './NotificationComponent';
import EmailNotificationService from '../Services/Notifications/EmailNotificationService';
import SMSNotificationService from '../Services/Notifications/SMSNotificationService';

const Component5 = () => {
  const message = 'You have a new message!';

  return (
    <div>
      <h1>Notification Example (DIP)</h1>
      
      {/* Usando el servicio de notificación por Email */}
      <NotificationComponent 
        notificationService={EmailNotificationService} 
        message={message} 
      />

      {/* Usando el servicio de notificación por SMS */}
      <NotificationComponent 
        notificationService={SMSNotificationService} 
        message={message} 
      />
    </div>
  );
};

export default Component5;