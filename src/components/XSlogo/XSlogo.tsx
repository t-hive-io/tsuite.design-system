import React from 'react';
import './XSlogo.css';

export interface XSlogoProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * XS-logo
 * Maps to Figma component: "XS-logo"
 */
export const XSlogo: React.FC<XSlogoProps> = ({ className, children }) => {
  return (
    <div className={`xslogo ${className || ''}`}>
      {children || 'XS-logo'}
    </div>
  );
};
