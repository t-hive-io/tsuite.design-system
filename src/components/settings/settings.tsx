import React from 'react';
import './settings.css';

export interface settingsProps {
  className?: string;
  children?: React.ReactNode;
}

export const settings: React.FC<settingsProps> = ({ className, children }) => {
  return (
    <div className={`settings ${className || ''}`}>
      {children || 'settings Component'}
    </div>
  );
};
