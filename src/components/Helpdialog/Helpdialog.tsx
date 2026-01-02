import React from 'react';
import './Helpdialog.css';

export interface HelpdialogProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Help dialog
 * Maps to Figma component: "Help dialog"
 */
export const Helpdialog: React.FC<HelpdialogProps> = ({ className, children }) => {
  return (
    <div className={`helpdialog ${className || ''}`}>
      {children || 'Help dialog'}
    </div>
  );
};
