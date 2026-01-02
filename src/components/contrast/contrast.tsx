import React from 'react';
import './contrast.css';

export interface contrastProps {
  className?: string;
  children?: React.ReactNode;
}

export const contrast: React.FC<contrastProps> = ({ className, children }) => {
  return (
    <div className={`contrast ${className || ''}`}>
      {children || 'contrast Component'}
    </div>
  );
};
