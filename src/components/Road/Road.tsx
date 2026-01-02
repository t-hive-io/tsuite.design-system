import React from 'react';
import './Road.css';

export interface RoadProps {
  className?: string;
  children?: React.ReactNode;
}

export const Road: React.FC<RoadProps> = ({ className, children }) => {
  return (
    <div className={`road ${className || ''}`}>
      {children || 'Road Component'}
    </div>
  );
};
