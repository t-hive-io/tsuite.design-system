import React from 'react';
import './Area.css';

export interface AreaProps {
  className?: string;
  children?: React.ReactNode;
}

export const Area: React.FC<AreaProps> = ({ className, children }) => {
  return (
    <div className={`area ${className || ''}`}>
      {children || 'Area Component'}
    </div>
  );
};
