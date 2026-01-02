import React from 'react';
import './Morehoriz.css';

export interface MorehorizProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * more_horiz
 * Maps to Figma component: "more_horiz"
 */
export const Morehoriz: React.FC<MorehorizProps> = ({ className, children }) => {
  return (
    <div className={`morehoriz ${className || ''}`}>
      {children || 'more_horiz'}
    </div>
  );
};
