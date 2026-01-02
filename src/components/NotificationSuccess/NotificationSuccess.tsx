import React from 'react';
import './NotificationSuccess.css';

export interface NotificationSuccessProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Notification: Success
 * Maps to Figma component: "Notification: Success"
 */
export const NotificationSuccess: React.FC<NotificationSuccessProps> = ({ className, children }) => {
  return (
    <div className={`notificationsuccess ${className || ''}`}>
      {children || 'Notification: Success'}
    </div>
  );
};
