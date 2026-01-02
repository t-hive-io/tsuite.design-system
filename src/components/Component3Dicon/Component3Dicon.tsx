import React from 'react';
import './Component3Dicon.css';

export interface Component3DiconProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * 3D icon
 * Maps to Figma component: "3D icon"
 */
export const Component3Dicon: React.FC<Component3DiconProps> = ({ className, children }) => {
  return (
    <div className={`component3dicon ${className || ''}`}>
      {children || '3D icon'}
    </div>
  );
};
