import React from 'react';
import './lock.css';

export interface lockProps {
  className?: string;
  children?: React.ReactNode;
}

export const lock: React.FC<lockProps> = ({ className, children }) => {
  return (
    <div className={`lock ${className || ''}`}>
      {children || 'lock Component'}
    </div>
  );
};
