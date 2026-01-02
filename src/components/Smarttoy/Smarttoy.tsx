import React from 'react';
import './Smarttoy.css';

export interface SmarttoyProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * smart_toy
 * Maps to Figma component: "smart_toy"
 */
export const Smarttoy: React.FC<SmarttoyProps> = ({ className, children }) => {
  return (
    <div className={`smarttoy ${className || ''}`}>
      {children || 'smart_toy'}
    </div>
  );
};
