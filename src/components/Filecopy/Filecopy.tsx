import React from 'react';
import './Filecopy.css';

export interface FilecopyProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * file_copy
 * Maps to Figma component: "file_copy"
 */
export const Filecopy: React.FC<FilecopyProps> = ({ className, children }) => {
  return (
    <div className={`filecopy ${className || ''}`}>
      {children || 'file_copy'}
    </div>
  );
};
