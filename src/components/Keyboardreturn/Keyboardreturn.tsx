import React from 'react';
import './Keyboardreturn.css';

export interface KeyboardreturnProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * keyboard_return
 * Maps to Figma component: "keyboard_return"
 */
export const Keyboardreturn: React.FC<KeyboardreturnProps> = ({ className, children }) => {
  return (
    <div className={`keyboardreturn ${className || ''}`}>
      {children || 'keyboard_return'}
    </div>
  );
};
