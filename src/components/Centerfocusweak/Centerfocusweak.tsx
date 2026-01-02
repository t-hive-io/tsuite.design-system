import React from 'react';
import './Centerfocusweak.css';

export interface CenterfocusweakProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * center_focus_weak
 * Maps to Figma component: "center_focus_weak"
 */
export const Centerfocusweak: React.FC<CenterfocusweakProps> = ({ className, children }) => {
  return (
    <div className={`centerfocusweak ${className || ''}`}>
      {children || 'center_focus_weak'}
    </div>
  );
};
