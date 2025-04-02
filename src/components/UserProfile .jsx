import React from 'react';
import UserBasicInfo from './UserBasicInfo';
import UserBillingInfo from './UserBillingInfo';
import UserActivityHistory from './UserActivityHistory';

const UserProfile = ({ name, email, billingInfo, activityHistory }) => (
  <div>
    <UserBasicInfo name={name} email={email} />
    {billingInfo && <UserBillingInfo billingInfo={billingInfo} />}
    {activityHistory && activityHistory.length > 0 && (
      <UserActivityHistory activityHistory={activityHistory} />
    )}
  </div>
);

export default UserProfile;