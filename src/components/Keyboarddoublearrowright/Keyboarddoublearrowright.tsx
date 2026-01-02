import React from 'react';
import './Keyboarddoublearrowright.css';

export interface KeyboarddoublearrowrightProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * keyboard_double_arrow_right
 * Maps to Figma component: "keyboard_double_arrow_right"
 */
export const Keyboarddoublearrowright: React.FC<KeyboarddoublearrowrightProps> = ({ className, children }) => {
  return (
    <div className={`keyboarddoublearrowright ${className || ''}`}>
      {children || 'keyboard_double_arrow_right'}
    </div>
  );
};
