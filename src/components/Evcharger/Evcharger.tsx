import React from 'react';
import './Evcharger.css';

export interface EvchargerProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * ev_charger
 * Maps to Figma component: "ev_charger"
 */
export const Evcharger: React.FC<EvchargerProps> = ({ className, children }) => {
  return (
    <div className={`evcharger ${className || ''}`}>
      {children || 'ev_charger'}
    </div>
  );
};
