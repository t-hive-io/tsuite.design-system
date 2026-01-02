import React from 'react';
import './Wall.css';

export interface WallProps {
  className?: string;
  children?: React.ReactNode;
}

export const Wall: React.FC<WallProps> = ({ className, children }) => {
  return (
    <div className={`wall ${className || ''}`}>
      {children || 'Wall Component'}
    </div>
  );
};
