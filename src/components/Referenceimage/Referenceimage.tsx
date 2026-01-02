import React from 'react';
import './Referenceimage.css';

export interface ReferenceimageProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Reference image
 * Maps to Figma component: "Reference image"
 */
export const Referenceimage: React.FC<ReferenceimageProps> = ({ className, children }) => {
  return (
    <div className={`referenceimage ${className || ''}`}>
      {children || 'Reference image'}
    </div>
  );
};
