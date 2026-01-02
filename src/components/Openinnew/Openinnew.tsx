import React from 'react';
import './Openinnew.css';

export interface OpeninnewProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * open_in_new
 * Maps to Figma component: "open_in_new"
 */
export const Openinnew: React.FC<OpeninnewProps> = ({ className, children }) => {
  return (
    <div className={`openinnew ${className || ''}`}>
      {children || 'open_in_new'}
    </div>
  );
};
