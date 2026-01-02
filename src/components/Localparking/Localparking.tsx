import React from 'react';
import './Localparking.css';

export interface LocalparkingProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * local_parking
 * Maps to Figma component: "local_parking"
 */
export const Localparking: React.FC<LocalparkingProps> = ({ className, children }) => {
  return (
    <div className={`localparking ${className || ''}`}>
      {children || 'local_parking'}
    </div>
  );
};
