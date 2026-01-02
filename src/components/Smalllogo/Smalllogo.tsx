import React from 'react';
import './Smalllogo.css';

export interface SmalllogoProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Small-logo
 * Maps to Figma component: "Small-logo"
 */
export const Smalllogo: React.FC<SmalllogoProps> = ({ className, children }) => {
  return (
    <div className={`smalllogo ${className || ''}`}>
      {children || 'Small-logo'}
    </div>
  );
};
