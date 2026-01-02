import React from 'react';
import './Floorplancard.css';

export interface FloorplancardProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Floorplan card
 * Maps to Figma component: "Floorplan card"
 */
export const Floorplancard: React.FC<FloorplancardProps> = ({ className, children }) => {
  return (
    <div className={`floorplancard ${className || ''}`}>
      {children || 'Floorplan card'}
    </div>
  );
};
