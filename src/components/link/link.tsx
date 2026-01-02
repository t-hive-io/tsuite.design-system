import React from 'react';
import './link.css';

export interface linkProps {
  className?: string;
  children?: React.ReactNode;
}

export const link: React.FC<linkProps> = ({ className, children }) => {
  return (
    <div className={`link ${className || ''}`}>
      {children || 'link Component'}
    </div>
  );
};
