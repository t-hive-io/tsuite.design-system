import React from 'react';
import './nav.css';

export interface navProps {
  className?: string;
  children?: React.ReactNode;
}

export const nav: React.FC<navProps> = ({ className, children }) => {
  return (
    <div className={`nav ${className || ''}`}>
      {children || 'nav Component'}
    </div>
  );
};
