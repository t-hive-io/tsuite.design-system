import React from 'react';
import './Pausecircle.css';

export interface PausecircleProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * pause_circle
 * Maps to Figma component: "pause_circle"
 */
export const Pausecircle: React.FC<PausecircleProps> = ({ className, children }) => {
  return (
    <div className={`pausecircle ${className || ''}`}>
      {children || 'pause_circle'}
    </div>
  );
};
