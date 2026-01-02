import React from 'react';
import './Attachfile.css';

export interface AttachfileProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * attach_file
 * Maps to Figma component: "attach_file"
 */
export const Attachfile: React.FC<AttachfileProps> = ({ className, children }) => {
  return (
    <div className={`attachfile ${className || ''}`}>
      {children || 'attach_file'}
    </div>
  );
};
