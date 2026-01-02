import React from 'react';
import './Arrowdropup.css';

export interface ArrowdropupProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * arrow_drop_up
 * Maps to Figma component: "arrow_drop_up"
 */
export const Arrowdropup: React.FC<ArrowdropupProps> = ({ className, children }) => {
  return (
    <div className={`arrowdropup ${className || ''}`}>
      {children || 'arrow_drop_up'}
    </div>
  );
};
