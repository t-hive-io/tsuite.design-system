import React from 'react';
import './Personadd.css';

export interface PersonaddProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * person_add
 * Maps to Figma component: "person_add"
 */
export const Personadd: React.FC<PersonaddProps> = ({ className, children }) => {
  return (
    <div className={`personadd ${className || ''}`}>
      {children || 'person_add'}
    </div>
  );
};
