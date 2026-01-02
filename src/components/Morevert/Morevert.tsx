import React from 'react';
import './Morevert.css';

export interface MorevertProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * more_vert
 * Maps to Figma component: "more_vert"
 */
export const Morevert: React.FC<MorevertProps> = ({ className, children }) => {
  return (
    <div className={`morevert ${className || ''}`}>
      {children || 'more_vert'}
    </div>
  );
};
