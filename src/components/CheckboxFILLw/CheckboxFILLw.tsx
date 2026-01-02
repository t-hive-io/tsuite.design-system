import React from 'react';
import './CheckboxFILLw.css';

export interface CheckboxFILLwProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * check_box_FILL_w
 * Maps to Figma component: "check_box_FILL_w"
 */
export const CheckboxFILLw: React.FC<CheckboxFILLwProps> = ({ className, children }) => {
  return (
    <div className={`checkboxfillw ${className || ''}`}>
      {children || 'check_box_FILL_w'}
    </div>
  );
};
