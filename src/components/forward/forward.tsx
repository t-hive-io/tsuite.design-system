import React from 'react';
import './forward.css';

export interface forwardProps {
  className?: string;
  children?: React.ReactNode;
}

export const forward: React.FC<forwardProps> = ({ className, children }) => {
  return (
    <div className={`forward ${className || ''}`}>
      {children || 'forward Component'}
    </div>
  );
};
