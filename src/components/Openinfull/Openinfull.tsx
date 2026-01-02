import React from 'react';
import './Openinfull.css';

export interface OpeninfullProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * open_in_full
 * Maps to Figma component: "open_in_full"
 */
export const Openinfull: React.FC<OpeninfullProps> = ({ className, children }) => {
  return (
    <div className={`openinfull ${className || ''}`}>
      {children || 'open_in_full'}
    </div>
  );
};
