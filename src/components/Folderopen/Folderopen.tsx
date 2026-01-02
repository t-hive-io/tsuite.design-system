import React from 'react';
import './Folderopen.css';

export interface FolderopenProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * folder_open
 * Maps to Figma component: "folder_open"
 */
export const Folderopen: React.FC<FolderopenProps> = ({ className, children }) => {
  return (
    <div className={`folderopen ${className || ''}`}>
      {children || 'folder_open'}
    </div>
  );
};
