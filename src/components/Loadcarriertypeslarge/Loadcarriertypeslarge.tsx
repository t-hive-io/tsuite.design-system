import React from 'react';
import './Loadcarriertypeslarge.css';

export interface LoadcarriertypeslargeProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Load carrier types large
 * Maps to Figma component: "Load carrier types large"
 */
export const Loadcarriertypeslarge: React.FC<LoadcarriertypeslargeProps> = ({ className, children }) => {
  return (
    <div className={`loadcarriertypeslarge ${className || ''}`}>
      {children || 'Load carrier types large'}
    </div>
  );
};
