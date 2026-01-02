import React from 'react';
import './Checkcircle.css';

export interface CheckcircleProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * check_circle
 * Maps to Figma component: "check_circle"
 */
export const Checkcircle: React.FC<CheckcircleProps> = ({ className, children }) => {
  return (
    <div className={`checkcircle ${className || ''}`}>
      {children || 'check_circle'}
    </div>
  );
};
