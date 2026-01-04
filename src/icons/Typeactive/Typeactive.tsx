import React from 'react';
import './Typeactive.css';
import IconSvg from '../assets/icons/Typeactive--2419-633.svg?react';

export interface TypeactiveProps {
  className?: string;
}

/**
 * Typeactive
 *
 * Original name: Type=Active
 * SVG file: Typeactive--2419-633.svg
 */
export const Typeactive: React.FC<TypeactiveProps> = ({ className }) => {
  return <IconSvg className={`typeactive ${className || ''}`} />;
};
