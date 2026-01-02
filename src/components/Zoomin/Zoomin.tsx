import React from 'react';
import './Zoomin.css';

export interface ZoominProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * zoom_in
 * Maps to Figma component: "zoom_in"
 */
export const Zoomin: React.FC<ZoominProps> = ({ className, children }) => {
  return (
    <div className={`zoomin ${className || ''}`}>
      {children || 'zoom_in'}
    </div>
  );
};
