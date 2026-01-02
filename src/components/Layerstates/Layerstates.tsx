import React from 'react';
import './Layerstates.css';

export interface LayerstatesProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Layer states
 * Maps to Figma component: "Layer states"
 */
export const Layerstates: React.FC<LayerstatesProps> = ({ className, children }) => {
  return (
    <div className={`layerstates ${className || ''}`}>
      {children || 'Layer states'}
    </div>
  );
};
