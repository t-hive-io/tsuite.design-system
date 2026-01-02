import React from 'react';
import './block.css';

export interface blockProps {
  className?: string;
  children?: React.ReactNode;
}

export const block: React.FC<blockProps> = ({ className, children }) => {
  return (
    <div className={`block ${className || ''}`}>
      {children || 'block Component'}
    </div>
  );
};
