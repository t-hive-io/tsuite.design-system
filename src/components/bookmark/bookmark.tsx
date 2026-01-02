import React from 'react';
import './bookmark.css';

export interface bookmarkProps {
  className?: string;
  children?: React.ReactNode;
}

export const bookmark: React.FC<bookmarkProps> = ({ className, children }) => {
  return (
    <div className={`bookmark ${className || ''}`}>
      {children || 'bookmark Component'}
    </div>
  );
};
