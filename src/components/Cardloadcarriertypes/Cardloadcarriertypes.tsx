import React from 'react';
import './Cardloadcarriertypes.css';

export interface CardloadcarriertypesProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Card load carrier types
 * Maps to Figma component: "Card load carrier types"
 */
export const Cardloadcarriertypes: React.FC<CardloadcarriertypesProps> = ({ className, children }) => {
  return (
    <div className={`cardloadcarriertypes ${className || ''}`}>
      {children || 'Card load carrier types'}
    </div>
  );
};
