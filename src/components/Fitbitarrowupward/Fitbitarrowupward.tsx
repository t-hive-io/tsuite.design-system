import React from 'react';
import './Fitbitarrowupward.css';

export interface FitbitarrowupwardProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * fitbit_arrow_upward
 * Maps to Figma component: "fitbit_arrow_upward"
 */
export const Fitbitarrowupward: React.FC<FitbitarrowupwardProps> = ({ className, children }) => {
  return (
    <div className={`fitbitarrowupward ${className || ''}`}>
      {children || 'fitbit_arrow_upward'}
    </div>
  );
};
