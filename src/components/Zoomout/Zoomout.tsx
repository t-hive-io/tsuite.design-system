import React from 'react';
import './Zoomout.css';

export interface ZoomoutProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * zoom_out
 * Maps to Figma component: "zoom_out"
 */
export const Zoomout: React.FC<ZoomoutProps> = ({ className, children }) => {
  return (
    <div className={`zoomout ${className || ''}`}>
      {children || 'zoom_out'}
    </div>
  );
};
