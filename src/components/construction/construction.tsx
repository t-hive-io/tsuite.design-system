import React from 'react';
import './construction.css';

export interface constructionProps {
  className?: string;
  children?: React.ReactNode;
}

export const construction: React.FC<constructionProps> = ({ className, children }) => {
  return (
    <div className={`construction ${className || ''}`}>
      {children || 'construction Component'}
    </div>
  );
};
