import React from 'react';
import './LargeFloorplancardsection.css';

export interface LargeFloorplancardsectionProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Large Floorplan card section
 * Maps to Figma component: "Large Floorplan card section"
 */
export const LargeFloorplancardsection: React.FC<LargeFloorplancardsectionProps> = ({ className, children }) => {
  return (
    <div className={`largefloorplancardsection ${className || ''}`}>
      {children || 'Large Floorplan card section'}
    </div>
  );
};
