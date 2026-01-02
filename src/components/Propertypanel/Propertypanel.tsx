import React from 'react';
import './Propertypanel.css';

export interface PropertypanelProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Property panel
 * Maps to Figma component: "Property panel"
 */
export const Propertypanel: React.FC<PropertypanelProps> = ({ className, children }) => {
  return (
    <div className={`propertypanel ${className || ''}`}>
      {children || 'Property panel'}
    </div>
  );
};
