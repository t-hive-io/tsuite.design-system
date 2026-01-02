import React from 'react';
import './NotificationFatal.css';

export interface NotificationFatalProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Notification: Fatal
 * Maps to Figma component: "Notification: Fatal"
 */
export const NotificationFatal: React.FC<NotificationFatalProps> = ({ className, children }) => {
  return (
    <div className={`notificationfatal ${className || ''}`}>
      {children || 'Notification: Fatal'}
    </div>
  );
};
