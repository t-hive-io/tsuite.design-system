import React from 'react';
import './nearby.css';

export interface nearbyProps {
  className?: string;
  children?: React.ReactNode;
}

export const nearby: React.FC<nearbyProps> = ({ className, children }) => {
  return (
    <div className={`nearby ${className || ''}`}>
      {children || 'nearby Component'}
    </div>
  );
};
