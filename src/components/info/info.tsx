import React from 'react';
import './info.css';

export interface infoProps {
  className?: string;
  children?: React.ReactNode;
}

export const info: React.FC<infoProps> = ({ className, children }) => {
  return (
    <div className={`info ${className || ''}`}>
      {children || 'info Component'}
    </div>
  );
};
