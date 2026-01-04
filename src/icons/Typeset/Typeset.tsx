import React from 'react';
import './Typeset.css';
import IconSvg from '../assets/icons/Typeset--2421-757.svg?react';

export interface TypesetProps {
  className?: string;
}

/**
 * Typeset
 *
 * Original name: Type=Set
 * SVG file: Typeset--2421-757.svg
 */
export const Typeset: React.FC<TypesetProps> = ({ className }) => {
  return <IconSvg className={`typeset ${className || ''}`} />;
};
