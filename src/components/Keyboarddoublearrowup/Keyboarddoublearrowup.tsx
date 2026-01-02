import React from 'react';
import './Keyboarddoublearrowup.css';

export interface KeyboarddoublearrowupProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * keyboard_double_arrow_up
 * Maps to Figma component: "keyboard_double_arrow_up"
 */
export const Keyboarddoublearrowup: React.FC<KeyboarddoublearrowupProps> = ({ className, children }) => {
  return (
    <div className={`keyboarddoublearrowup ${className || ''}`}>
      {children || 'keyboard_double_arrow_up'}
    </div>
  );
};
