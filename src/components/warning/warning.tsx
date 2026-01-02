import React from 'react';
import './warning.css';

export interface warningProps {
  className?: string;
  children?: React.ReactNode;
}

export const warning: React.FC<warningProps> = ({ className, children }) => {
  return (
    <div className={`warning ${className || ''}`}>
      {children || 'warning Component'}
    </div>
  );
};
