import React from 'react';
import './notifications.css';

export interface notificationsProps {
  className?: string;
  children?: React.ReactNode;
}

export const notifications: React.FC<notificationsProps> = ({ className, children }) => {
  return (
    <div className={`notifications ${className || ''}`}>
      {children || 'notifications Component'}
    </div>
  );
};
