import React from 'react';
import './Typetype3.css';
import IconSvg from '../assets/icons/Typetype3--5422-27131.svg?react';

export interface Typetype3Props {
  className?: string;
}

/**
 * Typetype3
 *
 * Original name: Type=Type3
 * SVG file: Typetype3--5422-27131.svg
 */
export const Typetype3: React.FC<Typetype3Props> = ({ className }) => {
  return <IconSvg className={`typetype3 ${className || ''}`} />;
};
