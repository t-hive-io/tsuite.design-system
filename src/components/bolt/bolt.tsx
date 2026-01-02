import React from 'react';
import './bolt.css';

export interface boltProps {
  className?: string;
  children?: React.ReactNode;
}

export const bolt: React.FC<boltProps> = ({ className, children }) => {
  return (
    <div className={`bolt ${className || ''}`}>
      {children || 'bolt Component'}
    </div>
  );
};
