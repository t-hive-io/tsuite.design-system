import React from 'react';
import './NotificationInformation.css';

export interface NotificationInformationProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Notification: Information
 * Maps to Figma component: "Notification: Information"
 */
export const NotificationInformation: React.FC<NotificationInformationProps> = ({ className, children }) => {
  return (
    <div className={`notificationinformation ${className || ''}`}>
      {children || 'Notification: Information'}
    </div>
  );
};
