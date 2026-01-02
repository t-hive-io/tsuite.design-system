import React from 'react';
import './Alignhorizontalleft.css';

export interface AlignhorizontalleftProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * align_horizontal_left
 * Maps to Figma component: "align_horizontal_left"
 */
export const Alignhorizontalleft: React.FC<AlignhorizontalleftProps> = ({ className, children }) => {
  return (
    <div className={`alignhorizontalleft ${className || ''}`}>
      {children || 'align_horizontal_left'}
    </div>
  );
};
