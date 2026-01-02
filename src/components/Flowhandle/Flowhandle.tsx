import React from 'react';
import './Flowhandle.css';

export interface FlowhandleProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Flow handle
 * Maps to Figma component: "Flow handle"
 */
export const Flowhandle: React.FC<FlowhandleProps> = ({ className, children }) => {
  return (
    <div className={`flowhandle ${className || ''}`}>
      {children || 'Flow handle'}
    </div>
  );
};
