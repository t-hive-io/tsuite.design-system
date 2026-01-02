import React from 'react';
import './Topbars.css';

export interface TopbarsProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Top bars
 * Maps to Figma component: "Top bars"
 */
export const Topbars: React.FC<TopbarsProps> = ({ className, children }) => {
  return (
    <div className={`topbars ${className || ''}`}>
      {children || 'Top bars'}
    </div>
  );
};
