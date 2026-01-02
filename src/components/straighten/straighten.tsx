import React from 'react';
import './straighten.css';

export interface straightenProps {
  className?: string;
  children?: React.ReactNode;
}

export const straighten: React.FC<straightenProps> = ({ className, children }) => {
  return (
    <div className={`straighten ${className || ''}`}>
      {children || 'straighten Component'}
    </div>
  );
};
