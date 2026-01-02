import React from 'react';
import './Scale.css';

export interface ScaleProps {
  className?: string;
  children?: React.ReactNode;
}

export const Scale: React.FC<ScaleProps> = ({ className, children }) => {
  return (
    <div className={`scale ${className || ''}`}>
      {children || 'Scale Component'}
    </div>
  );
};
