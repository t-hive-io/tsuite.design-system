import React from 'react';
import './Heatpump.css';

export interface HeatpumpProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * heat_pump
 * Maps to Figma component: "heat_pump"
 */
export const Heatpump: React.FC<HeatpumpProps> = ({ className, children }) => {
  return (
    <div className={`heatpump ${className || ''}`}>
      {children || 'heat_pump'}
    </div>
  );
};
