import React from 'react';
import './Package2.css';

export interface Package2Props {
  className?: string;
  children?: React.ReactNode;
}

/**
 * package_2
 * Maps to Figma component: "package_2"
 */
export const Package2: React.FC<Package2Props> = ({ className, children }) => {
  return (
    <div className={`package2 ${className || ''}`}>
      {children || 'package_2'}
    </div>
  );
};
