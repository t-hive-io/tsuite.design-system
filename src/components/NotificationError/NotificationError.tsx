import React from 'react';
import './NotificationError.css';

export interface NotificationErrorProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Notification: Error
 * Maps to Figma component: "Notification: Error"
 */
export const NotificationError: React.FC<NotificationErrorProps> = ({ className, children }) => {
  return (
    <div className={`notificationerror ${className || ''}`}>
      {children || 'Notification: Error'}
    </div>
  );
};
