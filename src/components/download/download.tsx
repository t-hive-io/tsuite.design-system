import React from 'react';
import './download.css';

export interface downloadProps {
  className?: string;
  children?: React.ReactNode;
}

export const download: React.FC<downloadProps> = ({ className, children }) => {
  return (
    <div className={`download ${className || ''}`}>
      {children || 'download Component'}
    </div>
  );
};
