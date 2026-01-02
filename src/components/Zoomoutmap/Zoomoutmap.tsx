import React from 'react';
import './Zoomoutmap.css';

export interface ZoomoutmapProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * zoom_out_map
 * Maps to Figma component: "zoom_out_map"
 */
export const Zoomoutmap: React.FC<ZoomoutmapProps> = ({ className, children }) => {
  return (
    <div className={`zoomoutmap ${className || ''}`}>
      {children || 'zoom_out_map'}
    </div>
  );
};
