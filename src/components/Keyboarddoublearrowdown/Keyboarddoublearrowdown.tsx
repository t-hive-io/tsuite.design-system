import React from 'react';
import './Keyboarddoublearrowdown.css';

export interface KeyboarddoublearrowdownProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * keyboard_double_arrow_down
 * Maps to Figma component: "keyboard_double_arrow_down"
 */
export const Keyboarddoublearrowdown: React.FC<KeyboarddoublearrowdownProps> = ({ className, children }) => {
  return (
    <div className={`keyboarddoublearrowdown ${className || ''}`}>
      {children || 'keyboard_double_arrow_down'}
    </div>
  );
};
