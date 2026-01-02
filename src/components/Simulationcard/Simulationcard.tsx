import React from 'react';
import './Simulationcard.css';

export interface SimulationcardProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Simulation card
 * Maps to Figma component: "Simulation card"
 */
export const Simulationcard: React.FC<SimulationcardProps> = ({ className, children }) => {
  return (
    <div className={`simulationcard ${className || ''}`}>
      {children || 'Simulation card'}
    </div>
  );
};
