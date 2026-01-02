import React from 'react';
import './PropertyAreaDatacard.css';

export interface PropertyAreaDatacardProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Property: Area Data card
 * Maps to Figma component: "Property: Area Data card"
 */
export const PropertyAreaDatacard: React.FC<PropertyAreaDatacardProps> = ({ className, children }) => {
  return (
    <div className={`propertyareadatacard ${className || ''}`}>
      {children || 'Property: Area Data card'}
    </div>
  );
};
