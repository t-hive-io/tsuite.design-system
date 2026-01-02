import React from 'react';
import './remove.css';

export interface removeProps {
  className?: string;
  children?: React.ReactNode;
}

export const remove: React.FC<removeProps> = ({ className, children }) => {
  return (
    <div className={`remove ${className || ''}`}>
      {children || 'remove Component'}
    </div>
  );
};
