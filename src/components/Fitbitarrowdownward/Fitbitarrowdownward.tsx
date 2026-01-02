import React from 'react';
import './Fitbitarrowdownward.css';

export interface FitbitarrowdownwardProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * fitbit_arrow_downward
 * Maps to Figma component: "fitbit_arrow_downward"
 */
export const Fitbitarrowdownward: React.FC<FitbitarrowdownwardProps> = ({ className, children }) => {
  return (
    <div className={`fitbitarrowdownward ${className || ''}`}>
      {children || 'fitbit_arrow_downward'}
    </div>
  );
};
