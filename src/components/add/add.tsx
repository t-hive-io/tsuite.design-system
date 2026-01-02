import React from 'react';
import './add.css';

export interface addProps {
  className?: string;
  children?: React.ReactNode;
}

export const add: React.FC<addProps> = ({ className, children }) => {
  return (
    <div className={`add ${className || ''}`}>
      {children || 'add Component'}
    </div>
  );
};
