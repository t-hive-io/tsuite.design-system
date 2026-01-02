import React from 'react';
import './Listsection.css';

export interface ListsectionProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * List section
 * Maps to Figma component: "List section"
 */
export const Listsection: React.FC<ListsectionProps> = ({ className, children }) => {
  return (
    <div className={`listsection ${className || ''}`}>
      {children || 'List section'}
    </div>
  );
};
