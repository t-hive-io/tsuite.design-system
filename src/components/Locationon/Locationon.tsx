import React from 'react';
import './Locationon.css';

export interface LocationonProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * location_on
 * Maps to Figma component: "location_on"
 */
export const Locationon: React.FC<LocationonProps> = ({ className, children }) => {
  return (
    <div className={`locationon ${className || ''}`}>
      {children || 'location_on'}
    </div>
  );
};
