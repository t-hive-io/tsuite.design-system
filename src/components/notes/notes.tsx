import React from 'react';
import './notes.css';

export interface notesProps {
  className?: string;
  children?: React.ReactNode;
}

export const notes: React.FC<notesProps> = ({ className, children }) => {
  return (
    <div className={`notes ${className || ''}`}>
      {children || 'notes Component'}
    </div>
  );
};
