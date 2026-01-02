import React from 'react';
import './PropertyHeadersection.css';

export interface PropertyHeadersectionProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Property: Header section
 * Maps to Figma component: "Property: Header section"
 */
export const PropertyHeadersection: React.FC<PropertyHeadersectionProps> = ({ className, children }) => {
  return (
    <div className={`propertyheadersection ${className || ''}`}>
      {children || 'Property: Header section'}
    </div>
  );
};
