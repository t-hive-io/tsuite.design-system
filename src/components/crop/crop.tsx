import React from 'react';
import './crop.css';

export interface cropProps {
  className?: string;
  children?: React.ReactNode;
}

export const crop: React.FC<cropProps> = ({ className, children }) => {
  return (
    <div className={`crop ${className || ''}`}>
      {children || 'crop Component'}
    </div>
  );
};
