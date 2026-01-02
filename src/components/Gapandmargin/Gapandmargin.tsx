import React from 'react';
import './Gapandmargin.css';

export interface GapandmarginProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Gap and margin
 * Maps to Figma component: "Gap and margin"
 */
export const Gapandmargin: React.FC<GapandmarginProps> = ({ className, children }) => {
  return (
    <div className={`gapandmargin ${className || ''}`}>
      {children || 'Gap and margin'}
    </div>
  );
};
