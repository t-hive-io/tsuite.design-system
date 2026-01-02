import React from 'react';
import './Vertical.css';

export interface VerticalProps {
  className?: string;
  children?: React.ReactNode;
}

export const Vertical: React.FC<VerticalProps> = ({ className, children }) => {
  return (
    <div className={`vertical ${className || ''}`}>
      {children || 'Vertical Component'}
    </div>
  );
};
