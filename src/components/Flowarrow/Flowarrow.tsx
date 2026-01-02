import React from 'react';
import './Flowarrow.css';

export interface FlowarrowProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Flow arrow
 * Maps to Figma component: "Flow arrow"
 */
export const Flowarrow: React.FC<FlowarrowProps> = ({ className, children }) => {
  return (
    <div className={`flowarrow ${className || ''}`}>
      {children || 'Flow arrow'}
    </div>
  );
};
