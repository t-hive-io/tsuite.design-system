import React from 'react';
import './visibility.css';

export interface visibilityProps {
  className?: string;
  children?: React.ReactNode;
}

export const visibility: React.FC<visibilityProps> = ({ className, children }) => {
  return (
    <div className={`visibility ${className || ''}`}>
      {children || 'visibility Component'}
    </div>
  );
};
