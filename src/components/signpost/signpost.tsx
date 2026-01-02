import React from 'react';
import './signpost.css';

export interface signpostProps {
  className?: string;
  children?: React.ReactNode;
}

export const signpost: React.FC<signpostProps> = ({ className, children }) => {
  return (
    <div className={`signpost ${className || ''}`}>
      {children || 'signpost Component'}
    </div>
  );
};
