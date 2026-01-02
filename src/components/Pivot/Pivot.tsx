import React from 'react';
import './Pivot.css';

export interface PivotProps {
  className?: string;
  children?: React.ReactNode;
}

export const Pivot: React.FC<PivotProps> = ({ className, children }) => {
  return (
    <div className={`pivot ${className || ''}`}>
      {children || 'Pivot Component'}
    </div>
  );
};
