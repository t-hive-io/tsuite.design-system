import React from 'react';
import './Dividers.css';

export interface DividersProps {
  className?: string;
  children?: React.ReactNode;
}

export const Dividers: React.FC<DividersProps> = ({ className, children }) => {
  return (
    <div className={`dividers ${className || ''}`}>
      {children || 'Dividers Component'}
    </div>
  );
};
