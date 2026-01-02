import React from 'react';
import './Rotateright.css';

export interface RotaterightProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * rotate_right
 * Maps to Figma component: "rotate_right"
 */
export const Rotateright: React.FC<RotaterightProps> = ({ className, children }) => {
  return (
    <div className={`rotateright ${className || ''}`}>
      {children || 'rotate_right'}
    </div>
  );
};
