import React from 'react';
import './Vehiclemodelslarge.css';

export interface VehiclemodelslargeProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Vehicle models large
 * Maps to Figma component: "Vehicle models large"
 */
export const Vehiclemodelslarge: React.FC<VehiclemodelslargeProps> = ({ className, children }) => {
  return (
    <div className={`vehiclemodelslarge ${className || ''}`}>
      {children || 'Vehicle models large'}
    </div>
  );
};
