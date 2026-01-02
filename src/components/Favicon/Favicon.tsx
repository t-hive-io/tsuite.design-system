import React from 'react';
import './Favicon.css';

export interface FaviconProps {
  className?: string;
  children?: React.ReactNode;
}

export const Favicon: React.FC<FaviconProps> = ({ className, children }) => {
  return (
    <div className={`favicon ${className || ''}`}>
      {children || 'Favicon Component'}
    </div>
  );
};
