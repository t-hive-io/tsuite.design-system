import React from 'react';
import './Viewcompact.css';

export interface ViewcompactProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * view_compact
 * Maps to Figma component: "view_compact"
 */
export const Viewcompact: React.FC<ViewcompactProps> = ({ className, children }) => {
  return (
    <div className={`viewcompact ${className || ''}`}>
      {children || 'view_compact'}
    </div>
  );
};
