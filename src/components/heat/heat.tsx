import React from 'react';
import './heat.css';

export interface heatProps {
  className?: string;
  children?: React.ReactNode;
}

export const heat: React.FC<heatProps> = ({ className, children }) => {
  return (
    <div className={`heat ${className || ''}`}>
      {children || 'heat Component'}
    </div>
  );
};
