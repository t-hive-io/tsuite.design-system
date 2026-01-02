import React from 'react';
import './InputText.css';

export interface InputTextProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Input – Text
 * Maps to Figma component: "Input – Text"
 */
export const InputText: React.FC<InputTextProps> = ({ className, children }) => {
  return (
    <div className={`inputtext ${className || ''}`}>
      {children || 'Input – Text'}
    </div>
  );
};
