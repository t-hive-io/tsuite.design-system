import React from 'react';
import './close.css';

export interface closeProps {
  className?: string;
  children?: React.ReactNode;
}

export const close: React.FC<closeProps> = ({ className, children }) => {
  return (
    <div className={`close ${className || ''}`}>
      {children || 'close Component'}
    </div>
  );
};
