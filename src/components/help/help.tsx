import React from 'react';
import './help.css';

export interface helpProps {
  className?: string;
  children?: React.ReactNode;
}

export const help: React.FC<helpProps> = ({ className, children }) => {
  return (
    <div className={`help ${className || ''}`}>
      {children || 'help Component'}
    </div>
  );
};
