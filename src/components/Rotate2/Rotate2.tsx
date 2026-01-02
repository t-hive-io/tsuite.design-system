import React from 'react';
import './Rotate2.css';

export interface Rotate2Props {
  className?: string;
  children?: React.ReactNode;
}

export const Rotate2: React.FC<Rotate2Props> = ({ className, children }) => {
  return (
    <div className={`rotate2 ${className || ''}`}>
      {children || 'Rotate2 Component'}
    </div>
  );
};
