import React from 'react';
import './Smallbadge.css';

export interface SmallbadgeProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Small badge
 * Maps to Figma component: "Small badge"
 */
export const Smallbadge: React.FC<SmallbadgeProps> = ({ className, children }) => {
  return (
    <div className={`smallbadge ${className || ''}`}>
      {children || 'Small badge'}
    </div>
  );
};
