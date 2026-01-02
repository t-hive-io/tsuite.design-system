import React from 'react';
import './Cropsquare.css';

export interface CropsquareProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * crop_square
 * Maps to Figma component: "crop_square"
 */
export const Cropsquare: React.FC<CropsquareProps> = ({ className, children }) => {
  return (
    <div className={`cropsquare ${className || ''}`}>
      {children || 'crop_square'}
    </div>
  );
};
