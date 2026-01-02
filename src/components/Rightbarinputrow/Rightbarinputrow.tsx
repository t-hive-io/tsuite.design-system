import React from 'react';
import './Rightbarinputrow.css';

export interface RightbarinputrowProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Right bar - input row
 * Maps to Figma component: "Right bar - input row"
 */
export const Rightbarinputrow: React.FC<RightbarinputrowProps> = ({ className, children }) => {
  return (
    <div className={`rightbarinputrow ${className || ''}`}>
      {children || 'Right bar - input row'}
    </div>
  );
};
