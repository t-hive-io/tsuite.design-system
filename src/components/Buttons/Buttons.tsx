import React from 'react';
import './Buttons.css';

export interface ButtonsProps {
  className?: string;
  children?: React.ReactNode;
}

export const Buttons: React.FC<ButtonsProps> = ({ className, children }) => {
  return (
    <div className={`buttons ${className || ''}`}>
      {children || 'Buttons Component'}
    </div>
  );
};
