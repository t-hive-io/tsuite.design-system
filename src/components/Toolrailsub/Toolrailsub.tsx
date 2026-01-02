import React from 'react';
import './Toolrailsub.css';

export interface ToolrailsubProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Tool rail sub
 * Maps to Figma component: "Tool rail sub"
 */
export const Toolrailsub: React.FC<ToolrailsubProps> = ({ className, children }) => {
  return (
    <div className={`toolrailsub ${className || ''}`}>
      {children || 'Tool rail sub'}
    </div>
  );
};
