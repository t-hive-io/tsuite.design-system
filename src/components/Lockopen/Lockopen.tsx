import React from 'react';
import './Lockopen.css';

export interface LockopenProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * lock_open
 * Maps to Figma component: "lock_open"
 */
export const Lockopen: React.FC<LockopenProps> = ({ className, children }) => {
  return (
    <div className={`lockopen ${className || ''}`}>
      {children || 'lock_open'}
    </div>
  );
};
