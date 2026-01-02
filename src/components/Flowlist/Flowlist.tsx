import React from 'react';
import './Flowlist.css';

export interface FlowlistProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Flow list
 * Maps to Figma component: "Flow list"
 */
export const Flowlist: React.FC<FlowlistProps> = ({ className, children }) => {
  return (
    <div className={`flowlist ${className || ''}`}>
      {children || 'Flow list'}
    </div>
  );
};
