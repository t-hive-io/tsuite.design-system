import React from 'react';
import './Fitbitarrowrightcustomized.css';

export interface FitbitarrowrightcustomizedProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * fitbit_arrow_right_customized
 * Maps to Figma component: "fitbit_arrow_right_customized"
 */
export const Fitbitarrowrightcustomized: React.FC<FitbitarrowrightcustomizedProps> = ({ className, children }) => {
  return (
    <div className={`fitbitarrowrightcustomized ${className || ''}`}>
      {children || 'fitbit_arrow_right_customized'}
    </div>
  );
};
