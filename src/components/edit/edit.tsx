import React from 'react';
import './edit.css';

export interface editProps {
  className?: string;
  children?: React.ReactNode;
}

export const edit: React.FC<editProps> = ({ className, children }) => {
  return (
    <div className={`edit ${className || ''}`}>
      {children || 'edit Component'}
    </div>
  );
};
