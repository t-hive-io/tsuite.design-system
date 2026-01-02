import React from 'react';
import './Keyboarddoublearrowleft.css';

export interface KeyboarddoublearrowleftProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * keyboard_double_arrow_left
 * Maps to Figma component: "keyboard_double_arrow_left"
 */
export const Keyboarddoublearrowleft: React.FC<KeyboarddoublearrowleftProps> = ({ className, children }) => {
  return (
    <div className={`keyboarddoublearrowleft ${className || ''}`}>
      {children || 'keyboard_double_arrow_left'}
    </div>
  );
};
