import React from 'react';
import './Familyhistory.css';

export interface FamilyhistoryProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * family_history
 * Maps to Figma component: "family_history"
 */
export const Familyhistory: React.FC<FamilyhistoryProps> = ({ className, children }) => {
  return (
    <div className={`familyhistory ${className || ''}`}>
      {children || 'family_history'}
    </div>
  );
};
