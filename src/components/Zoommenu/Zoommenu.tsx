import React from 'react';
import './Zoommenu.css';

export interface ZoommenuProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Zoom menu
 * Maps to Figma component: "Zoom menu"
 */
export const Zoommenu: React.FC<ZoommenuProps> = ({ className, children }) => {
  return (
    <div className={`zoommenu ${className || ''}`}>
      {children || 'Zoom menu'}
    </div>
  );
};
