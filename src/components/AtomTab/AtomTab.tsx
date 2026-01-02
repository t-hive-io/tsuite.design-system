import React from 'react';
import './AtomTab.css';

export interface AtomTabProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Atom: Tab
 * Maps to Figma component: "Atom: Tab"
 */
export const AtomTab: React.FC<AtomTabProps> = ({ className, children }) => {
  return (
    <div className={`atomtab ${className || ''}`}>
      {children || 'Atom: Tab'}
    </div>
  );
};
