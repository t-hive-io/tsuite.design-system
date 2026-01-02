import React from 'react';
import './Bars.css';

export interface BarsProps {
  className?: string;
  children?: React.ReactNode;
}

export const Bars: React.FC<BarsProps> = ({ className, children }) => {
  return (
    <div className={`bars ${className || ''}`}>
      {children || 'Bars Component'}
    </div>
  );
};
