import React from 'react';
import './image.css';

export interface imageProps {
  className?: string;
  children?: React.ReactNode;
}

export const image: React.FC<imageProps> = ({ className, children }) => {
  return (
    <div className={`image ${className || ''}`}>
      {children || 'image Component'}
    </div>
  );
};
