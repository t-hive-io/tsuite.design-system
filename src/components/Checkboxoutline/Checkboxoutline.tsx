import React from 'react';
import './Checkboxoutline.css';

export interface CheckboxoutlineProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * check_box_outline
 * Maps to Figma component: "check_box_outline"
 */
export const Checkboxoutline: React.FC<CheckboxoutlineProps> = ({ className, children }) => {
  return (
    <div className={`checkboxoutline ${className || ''}`}>
      {children || 'check_box_outline'}
    </div>
  );
};
