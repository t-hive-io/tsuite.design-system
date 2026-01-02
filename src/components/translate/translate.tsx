import React from 'react';
import './translate.css';

export interface translateProps {
  className?: string;
  children?: React.ReactNode;
}

export const translate: React.FC<translateProps> = ({ className, children }) => {
  return (
    <div className={`translate ${className || ''}`}>
      {children || 'translate Component'}
    </div>
  );
};
