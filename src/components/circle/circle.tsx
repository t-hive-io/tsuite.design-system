import React from 'react';
import './circle.css';

export interface circleProps {
  className?: string;
  children?: React.ReactNode;
}

export const circle: React.FC<circleProps> = ({ className, children }) => {
  return (
    <div className={`circle ${className || ''}`}>
      {children || 'circle Component'}
    </div>
  );
};
