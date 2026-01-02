import React from 'react';
import './Flowcolormodal.css';

export interface FlowcolormodalProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Flow color modal
 * Maps to Figma component: "Flow color modal"
 */
export const Flowcolormodal: React.FC<FlowcolormodalProps> = ({ className, children }) => {
  return (
    <div className={`flowcolormodal ${className || ''}`}>
      {children || 'Flow color modal'}
    </div>
  );
};
