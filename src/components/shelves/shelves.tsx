import React from 'react';
import './shelves.css';

export interface shelvesProps {
  className?: string;
  children?: React.ReactNode;
}

export const shelves: React.FC<shelvesProps> = ({ className, children }) => {
  return (
    <div className={`shelves ${className || ''}`}>
      {children || 'shelves Component'}
    </div>
  );
};
