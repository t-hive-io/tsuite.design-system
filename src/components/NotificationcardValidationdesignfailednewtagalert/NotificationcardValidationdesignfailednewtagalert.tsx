import React from 'react';
import './NotificationcardValidationdesignfailednewtagalert.css';

export interface NotificationcardValidationdesignfailednewtagalertProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Notification card: Validation design failed - new tag alert
 * Maps to Figma component: "Notification card: Validation design failed - new tag alert"
 */
export const NotificationcardValidationdesignfailednewtagalert: React.FC<NotificationcardValidationdesignfailednewtagalertProps> = ({ className, children }) => {
  return (
    <div className={`notificationcardvalidationdesignfailednewtagalert ${className || ''}`}>
      {children || 'Notification card: Validation design failed - new tag alert'}
    </div>
  );
};
