import React from 'react';
import './Upload.css';

export interface UploadProps {
  className?: string;
  children?: React.ReactNode;
}

export const Upload: React.FC<UploadProps> = ({ className, children }) => {
  return (
    <div className={`upload ${className || ''}`}>
      {children || 'Upload Component'}
    </div>
  );
};
