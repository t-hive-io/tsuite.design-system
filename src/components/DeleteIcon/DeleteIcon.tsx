import React from 'react';
import './DeleteIcon.css';

export interface DeleteIconProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * delete
 * Maps to Figma component: "delete"
 */
export const DeleteIcon: React.FC<DeleteIconProps> = ({ className, children }) => {
  return (
    <div className={`deleteicon ${className || ''}`}>
      {children || 'delete'}
    </div>
  );
};
