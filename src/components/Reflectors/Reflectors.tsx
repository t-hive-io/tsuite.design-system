import React from 'react';
import './Reflectors.css';

export interface ReflectorsProps {
  className?: string;
  children?: React.ReactNode;
}

export const Reflectors: React.FC<ReflectorsProps> = ({ className, children }) => {
  return (
    <div className={`reflectors ${className || ''}`}>
      {children || 'Reflectors Component'}
    </div>
  );
};
