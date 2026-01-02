import React from 'react';
import './Arrowdropdown.css';

export interface ArrowdropdownProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * arrow_drop_down
 * Maps to Figma component: "arrow_drop_down"
 */
export const Arrowdropdown: React.FC<ArrowdropdownProps> = ({ className, children }) => {
  return (
    <div className={`arrowdropdown ${className || ''}`}>
      {children || 'arrow_drop_down'}
    </div>
  );
};
