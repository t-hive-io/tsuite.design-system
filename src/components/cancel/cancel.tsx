import React from 'react';
import './cancel.css';

export interface cancelProps {
  className?: string;
  children?: React.ReactNode;
}

export const cancel: React.FC<cancelProps> = ({ className, children }) => {
  return (
    <div className={`cancel ${className || ''}`}>
      {children || 'cancel Component'}
    </div>
  );
};
