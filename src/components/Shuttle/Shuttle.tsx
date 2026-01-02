import React from 'react';
import './Shuttle.css';

export interface ShuttleProps {
  className?: string;
  children?: React.ReactNode;
}

export const Shuttle: React.FC<ShuttleProps> = ({ className, children }) => {
  return (
    <div className={`shuttle ${className || ''}`}>
      {children || 'Shuttle Component'}
    </div>
  );
};
