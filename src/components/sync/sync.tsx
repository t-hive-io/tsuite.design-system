import React from 'react';
import './sync.css';

export interface syncProps {
  className?: string;
  children?: React.ReactNode;
}

export const sync: React.FC<syncProps> = ({ className, children }) => {
  return (
    <div className={`sync ${className || ''}`}>
      {children || 'sync Component'}
    </div>
  );
};
