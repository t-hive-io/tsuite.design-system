import React from 'react';
import './Duplicate.css';

export interface DuplicateProps {
  className?: string;
  children?: React.ReactNode;
}

export const Duplicate: React.FC<DuplicateProps> = ({ className, children }) => {
  return (
    <div className={`duplicate ${className || ''}`}>
      {children || 'Duplicate Component'}
    </div>
  );
};
