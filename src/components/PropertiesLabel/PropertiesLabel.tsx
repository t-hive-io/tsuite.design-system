import React from 'react';
import './PropertiesLabel.css';

export interface PropertiesLabelProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Properties - Label
 * Maps to Figma component: "Properties - Label"
 */
export const PropertiesLabel: React.FC<PropertiesLabelProps> = ({ className, children }) => {
  return (
    <div className={`propertieslabel ${className || ''}`}>
      {children || 'Properties - Label'}
    </div>
  );
};
