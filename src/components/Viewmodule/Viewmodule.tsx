import React from 'react';
import './Viewmodule.css';

export interface ViewmoduleProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * view_module
 * Maps to Figma component: "view_module"
 */
export const Viewmodule: React.FC<ViewmoduleProps> = ({ className, children }) => {
  return (
    <div className={`viewmodule ${className || ''}`}>
      {children || 'view_module'}
    </div>
  );
};
