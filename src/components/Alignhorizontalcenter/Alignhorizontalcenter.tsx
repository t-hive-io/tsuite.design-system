import React from 'react';
import './Alignhorizontalcenter.css';

export interface AlignhorizontalcenterProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * align_horizontal_center
 * Maps to Figma component: "align_horizontal_center"
 */
export const Alignhorizontalcenter: React.FC<AlignhorizontalcenterProps> = ({ className, children }) => {
  return (
    <div className={`alignhorizontalcenter ${className || ''}`}>
      {children || 'align_horizontal_center'}
    </div>
  );
};
