import React from 'react';
import './LayoutTag.css';

export interface LayoutTagProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Layout Tag
 * Maps to Figma component: "Layout Tag"
 */
export const LayoutTag: React.FC<LayoutTagProps> = ({ className, children }) => {
  return (
    <div className={`layouttag ${className || ''}`}>
      {children || 'Layout Tag'}
    </div>
  );
};
