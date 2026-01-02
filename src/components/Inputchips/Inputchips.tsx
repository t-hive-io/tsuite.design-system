import React from 'react';
import './Inputchips.css';

export interface InputchipsProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Input chips
 * Maps to Figma component: "Input chips"
 */
export const Inputchips: React.FC<InputchipsProps> = ({ className, children }) => {
  return (
    <div className={`inputchips ${className || ''}`}>
      {children || 'Input chips'}
    </div>
  );
};
