import React from 'react';
import './logout.css';

export interface logoutProps {
  className?: string;
  children?: React.ReactNode;
}

export const logout: React.FC<logoutProps> = ({ className, children }) => {
  return (
    <div className={`logout ${className || ''}`}>
      {children || 'logout Component'}
    </div>
  );
};
