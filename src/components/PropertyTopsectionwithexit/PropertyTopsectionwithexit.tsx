import React from 'react';
import './PropertyTopsectionwithexit.css';

export interface PropertyTopsectionwithexitProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Property: Top section with exit
 * Maps to Figma component: "Property: Top section with exit"
 */
export const PropertyTopsectionwithexit: React.FC<PropertyTopsectionwithexitProps> = ({ className, children }) => {
  return (
    <div className={`propertytopsectionwithexit ${className || ''}`}>
      {children || 'Property: Top section with exit'}
    </div>
  );
};
