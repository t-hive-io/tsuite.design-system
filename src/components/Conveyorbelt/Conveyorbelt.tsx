import React from 'react';
import './Conveyorbelt.css';

export interface ConveyorbeltProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * conveyor_belt
 * Maps to Figma component: "conveyor_belt"
 */
export const Conveyorbelt: React.FC<ConveyorbeltProps> = ({ className, children }) => {
  return (
    <div className={`conveyorbelt ${className || ''}`}>
      {children || 'conveyor_belt'}
    </div>
  );
};
