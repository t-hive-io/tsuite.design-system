import React from 'react';
import './Radiobutton.css';

export interface RadiobuttonProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Radio button
 * Maps to Figma component: "Radio button"
 */
export const Radiobutton: React.FC<RadiobuttonProps> = ({ className, children }) => {
  return (
    <div className={`radiobutton ${className || ''}`}>
      {children || 'Radio button'}
    </div>
  );
};
