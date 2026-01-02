import React from 'react';
import './check.css';

export interface checkProps {
  className?: string;
  children?: React.ReactNode;
}

export const check: React.FC<checkProps> = ({ className, children }) => {
  return (
    <div className={`check ${className || ''}`}>
      {children || 'check Component'}
    </div>
  );
};
