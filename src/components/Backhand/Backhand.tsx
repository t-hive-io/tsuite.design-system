import React from 'react';
import './Backhand.css';

export interface BackhandProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * back_hand
 * Maps to Figma component: "back_hand"
 */
export const Backhand: React.FC<BackhandProps> = ({ className, children }) => {
  return (
    <div className={`backhand ${className || ''}`}>
      {children || 'back_hand'}
    </div>
  );
};
