import React from 'react';
import './Alignverticaltop.css';

export interface AlignverticaltopProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * align_vertical_top
 * Maps to Figma component: "align_vertical_top"
 */
export const Alignverticaltop: React.FC<AlignverticaltopProps> = ({ className, children }) => {
  return (
    <div className={`alignverticaltop ${className || ''}`}>
      {children || 'align_vertical_top'}
    </div>
  );
};
