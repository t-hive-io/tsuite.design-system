import React from 'react';
import './Areasections.css';

export interface AreasectionsProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Area sections
 * Maps to Figma component: "Area sections"
 */
export const Areasections: React.FC<AreasectionsProps> = ({ className, children }) => {
  return (
    <div className={`areasections ${className || ''}`}>
      {children || 'Area sections'}
    </div>
  );
};
