import React from 'react';
import './Keyboarddoublearrowrightleft.css';

export interface KeyboarddoublearrowrightleftProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * keyboard_double_arrow_right_left
 * Maps to Figma component: "keyboard_double_arrow_right_left"
 */
export const Keyboarddoublearrowrightleft: React.FC<KeyboarddoublearrowrightleftProps> = ({ className, children }) => {
  return (
    <div className={`keyboarddoublearrowrightleft ${className || ''}`}>
      {children || 'keyboard_double_arrow_right_left'}
    </div>
  );
};
