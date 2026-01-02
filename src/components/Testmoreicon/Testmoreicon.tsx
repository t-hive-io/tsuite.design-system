import React from 'react';
import './Testmoreicon.css';

export interface TestmoreiconProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * test more icon
 * Maps to Figma component: "test more icon"
 */
export const Testmoreicon: React.FC<TestmoreiconProps> = ({ className, children }) => {
  return (
    <div className={`testmoreicon ${className || ''}`}>
      {children || 'test more icon'}
    </div>
  );
};
