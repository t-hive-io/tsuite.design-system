import React from 'react';
import './Fishbone.css';

export interface FishboneProps {
  className?: string;
  children?: React.ReactNode;
}

export const Fishbone: React.FC<FishboneProps> = ({ className, children }) => {
  return (
    <div className={`fishbone ${className || ''}`}>
      {children || 'Fishbone Component'}
    </div>
  );
};
