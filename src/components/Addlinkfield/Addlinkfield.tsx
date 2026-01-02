import React from 'react';
import './Addlinkfield.css';

export interface AddlinkfieldProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Add link field
 * Maps to Figma component: "Add link field"
 */
export const Addlinkfield: React.FC<AddlinkfieldProps> = ({ className, children }) => {
  return (
    <div className={`addlinkfield ${className || ''}`}>
      {children || 'Add link field'}
    </div>
  );
};
