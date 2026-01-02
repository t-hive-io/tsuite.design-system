import React from 'react';
import './Startnewsimulationsection.css';

export interface StartnewsimulationsectionProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Start new simulation section
 * Maps to Figma component: "Start new simulation section"
 */
export const Startnewsimulationsection: React.FC<StartnewsimulationsectionProps> = ({ className, children }) => {
  return (
    <div className={`startnewsimulationsection ${className || ''}`}>
      {children || 'Start new simulation section'}
    </div>
  );
};
