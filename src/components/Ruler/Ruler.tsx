import React from 'react';
import './Ruler.css';

export interface RulerProps {
  className?: string;
  children?: React.ReactNode;
}

export const Ruler: React.FC<RulerProps> = ({ className, children }) => {
  return (
    <div className={`ruler ${className || ''}`}>
      {children || 'Ruler Component'}
    </div>
  );
};
