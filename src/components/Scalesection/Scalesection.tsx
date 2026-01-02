import React from 'react';
import './Scalesection.css';

export interface ScalesectionProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Scale section
 * Maps to Figma component: "Scale section"
 */
export const Scalesection: React.FC<ScalesectionProps> = ({ className, children }) => {
  return (
    <div className={`scalesection ${className || ''}`}>
      {children || 'Scale section'}
    </div>
  );
};
