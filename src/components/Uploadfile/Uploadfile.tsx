import React from 'react';
import './Uploadfile.css';

export interface UploadfileProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * upload_file
 * Maps to Figma component: "upload_file"
 */
export const Uploadfile: React.FC<UploadfileProps> = ({ className, children }) => {
  return (
    <div className={`uploadfile ${className || ''}`}>
      {children || 'upload_file'}
    </div>
  );
};
