import React from 'react';
import './InputSearch.css';

export interface InputSearchProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Input – Search
 * Maps to Figma component: "Input – Search"
 */
export const InputSearch: React.FC<InputSearchProps> = ({ className, children }) => {
  return (
    <div className={`inputsearch ${className || ''}`}>
      {children || 'Input – Search'}
    </div>
  );
};
