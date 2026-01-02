import React from 'react';
import './Garagehome.css';

export interface GaragehomeProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * garage_home
 * Maps to Figma component: "garage_home"
 */
export const Garagehome: React.FC<GaragehomeProps> = ({ className, children }) => {
  return (
    <div className={`garagehome ${className || ''}`}>
      {children || 'garage_home'}
    </div>
  );
};
