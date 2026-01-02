import React from 'react';
import './deployed.css';

export interface deployedProps {
  className?: string;
  children?: React.ReactNode;
}

export const deployed: React.FC<deployedProps> = ({ className, children }) => {
  return (
    <div className={`deployed ${className || ''}`}>
      {children || 'deployed Component'}
    </div>
  );
};
