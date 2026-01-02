import React from 'react';
import './Iconbuttonwithbadge.css';

export interface IconbuttonwithbadgeProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Icon button with badge
 * Maps to Figma component: "Icon button with badge"
 */
export const Iconbuttonwithbadge: React.FC<IconbuttonwithbadgeProps> = ({ className, children }) => {
  return (
    <div className={`iconbuttonwithbadge ${className || ''}`}>
      {children || 'Icon button with badge'}
    </div>
  );
};
