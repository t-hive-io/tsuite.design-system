import React from 'react';
import './Playarrow.css';

export interface PlayarrowProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * play_arrow
 * Maps to Figma component: "play_arrow"
 */
export const Playarrow: React.FC<PlayarrowProps> = ({ className, children }) => {
  return (
    <div className={`playarrow ${className || ''}`}>
      {children || 'play_arrow'}
    </div>
  );
};
