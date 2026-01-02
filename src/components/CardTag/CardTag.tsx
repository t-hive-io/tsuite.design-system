import React from 'react';
import './CardTag.css';

export interface CardTagProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Card Tag
 * Maps to Figma component: "Card Tag"
 */
export const CardTag: React.FC<CardTagProps> = ({ className, children }) => {
  return (
    <div className={`cardtag ${className || ''}`}>
      {children || 'Card Tag'}
    </div>
  );
};
