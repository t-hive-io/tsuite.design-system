import React from 'react';
import './Eventavailable.css';

export interface EventavailableProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * event_available
 * Maps to Figma component: "event_available"
 */
export const Eventavailable: React.FC<EventavailableProps> = ({ className, children }) => {
  return (
    <div className={`eventavailable ${className || ''}`}>
      {children || 'event_available'}
    </div>
  );
};
