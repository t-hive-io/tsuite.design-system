import React from 'react';
import './Linearscale.css';

export interface LinearscaleProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * linear_scale
 * Maps to Figma component: "linear_scale"
 */
export const Linearscale: React.FC<LinearscaleProps> = ({ className, children }) => {
  return (
    <div className={`linearscale ${className || ''}`}>
      {children || 'linear_scale'}
    </div>
  );
};
