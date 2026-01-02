import React from 'react';
import './Alignhorizontalright.css';

export interface AlignhorizontalrightProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * align_horizontal_right
 * Maps to Figma component: "align_horizontal_right"
 */
export const Alignhorizontalright: React.FC<AlignhorizontalrightProps> = ({ className, children }) => {
  return (
    <div className={`alignhorizontalright ${className || ''}`}>
      {children || 'align_horizontal_right'}
    </div>
  );
};
