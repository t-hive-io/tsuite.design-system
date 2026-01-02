import React from 'react';
import './Fitbitarrowleftcustomized.css';

export interface FitbitarrowleftcustomizedProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * fitbit_arrow_left_customized
 * Maps to Figma component: "fitbit_arrow_left_customized"
 */
export const Fitbitarrowleftcustomized: React.FC<FitbitarrowleftcustomizedProps> = ({ className, children }) => {
  return (
    <div className={`fitbitarrowleftcustomized ${className || ''}`}>
      {children || 'fitbit_arrow_left_customized'}
    </div>
  );
};
