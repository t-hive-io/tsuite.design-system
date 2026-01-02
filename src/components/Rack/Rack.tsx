import React from 'react';
import './Rack.css';

export interface RackProps {
  className?: string;
  children?: React.ReactNode;
}

export const Rack: React.FC<RackProps> = ({ className, children }) => {
  return (
    <div className={`rack ${className || ''}`}>
      {children || 'Rack Component'}
    </div>
  );
};
