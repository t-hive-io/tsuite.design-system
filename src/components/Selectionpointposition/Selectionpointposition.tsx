import React from 'react';
import './Selectionpointposition.css';

export interface SelectionpointpositionProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Selection point position
 * Maps to Figma component: "Selection point position"
 */
export const Selectionpointposition: React.FC<SelectionpointpositionProps> = ({ className, children }) => {
  return (
    <div className={`selectionpointposition ${className || ''}`}>
      {children || 'Selection point position'}
    </div>
  );
};
