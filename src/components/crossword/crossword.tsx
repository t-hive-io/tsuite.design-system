import React from 'react';
import './crossword.css';

export interface crosswordProps {
  className?: string;
  children?: React.ReactNode;
}

export const crossword: React.FC<crosswordProps> = ({ className, children }) => {
  return (
    <div className={`crossword ${className || ''}`}>
      {children || 'crossword Component'}
    </div>
  );
};
