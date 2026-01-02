import React from 'react';
import './error.css';

export interface errorProps {
  className?: string;
  children?: React.ReactNode;
}

export const error: React.FC<errorProps> = ({ className, children }) => {
  return (
    <div className={`error ${className || ''}`}>
      {children || 'error Component'}
    </div>
  );
};
