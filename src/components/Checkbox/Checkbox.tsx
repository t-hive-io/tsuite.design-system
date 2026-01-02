import React from 'react';
import './Checkbox.css';

export interface CheckboxProps {
  className?: string;
  children?: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({ className, children }) => {
  return (
    <div className={`checkbox ${className || ''}`}>
      {children || 'Checkbox Component'}
    </div>
  );
};
