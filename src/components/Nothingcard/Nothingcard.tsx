import React from 'react';
import './Nothingcard.css';

export interface NothingcardProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Nothing card
 * Maps to Figma component: "Nothing card"
 */
export const Nothingcard: React.FC<NothingcardProps> = ({ className, children }) => {
  return (
    <div className={`nothingcard ${className || ''}`}>
      {children || 'Nothing card'}
    </div>
  );
};
