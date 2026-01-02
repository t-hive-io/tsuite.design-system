import React from 'react';
import './Helpcenter.css';

export interface HelpcenterProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * help_center
 * Maps to Figma component: "help_center"
 */
export const Helpcenter: React.FC<HelpcenterProps> = ({ className, children }) => {
  return (
    <div className={`helpcenter ${className || ''}`}>
      {children || 'help_center'}
    </div>
  );
};
