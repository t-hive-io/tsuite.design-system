import React from 'react';
import './Explenationtooltip.css';

export interface ExplenationtooltipProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Explenation tooltip
 * Maps to Figma component: "Explenation tooltip"
 */
export const Explenationtooltip: React.FC<ExplenationtooltipProps> = ({ className, children }) => {
  return (
    <div className={`explenationtooltip ${className || ''}`}>
      {children || 'Explenation tooltip'}
    </div>
  );
};
