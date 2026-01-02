import React from 'react';
import './Visibilityoff.css';

export interface VisibilityoffProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * visibility_off
 * Maps to Figma component: "visibility_off"
 */
export const Visibilityoff: React.FC<VisibilityoffProps> = ({ className, children }) => {
  return (
    <div className={`visibilityoff ${className || ''}`}>
      {children || 'visibility_off'}
    </div>
  );
};
