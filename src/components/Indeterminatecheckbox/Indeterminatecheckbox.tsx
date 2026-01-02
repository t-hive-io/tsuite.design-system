import React from 'react';
import './Indeterminatecheckbox.css';

export interface IndeterminatecheckboxProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * indeterminate_check_box
 * Maps to Figma component: "indeterminate_check_box"
 */
export const Indeterminatecheckbox: React.FC<IndeterminatecheckboxProps> = ({ className, children }) => {
  return (
    <div className={`indeterminatecheckbox ${className || ''}`}>
      {children || 'indeterminate_check_box'}
    </div>
  );
};
