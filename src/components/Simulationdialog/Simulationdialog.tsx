import React from 'react';
import './Simulationdialog.css';

export interface SimulationdialogProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Simulation dialog
 * Maps to Figma component: "Simulation dialog"
 */
export const Simulationdialog: React.FC<SimulationdialogProps> = ({ className, children }) => {
  return (
    <div className={`simulationdialog ${className || ''}`}>
      {children || 'Simulation dialog'}
    </div>
  );
};
