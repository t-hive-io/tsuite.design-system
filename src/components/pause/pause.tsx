import React from 'react';
import './pause.css';

export interface pauseProps {
  className?: string;
  children?: React.ReactNode;
}

export const pause: React.FC<pauseProps> = ({ className, children }) => {
  return (
    <div className={`pause ${className || ''}`}>
      {children || 'pause Component'}
    </div>
  );
};
