import React from 'react';
import './NotificationWarning.css';

export interface NotificationWarningProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Notification: Warning
 * Maps to Figma component: "Notification: Warning"
 */
export const NotificationWarning: React.FC<NotificationWarningProps> = ({ className, children }) => {
  return (
    <div className={`notificationwarning ${className || ''}`}>
      {children || 'Notification: Warning'}
    </div>
  );
};
