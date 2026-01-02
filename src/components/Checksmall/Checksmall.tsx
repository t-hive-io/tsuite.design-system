import React from 'react';
import './Checksmall.css';

export interface ChecksmallProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * check_small
 * Maps to Figma component: "check_small"
 */
export const Checksmall: React.FC<ChecksmallProps> = ({ className, children }) => {
  return (
    <div className={`checksmall ${className || ''}`}>
      {children || 'check_small'}
    </div>
  );
};
