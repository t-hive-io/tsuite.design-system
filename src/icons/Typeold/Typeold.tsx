import React from 'react';
import './Typeold.css';
import IconSvg from '../assets/icons/Typeold--2419-631.svg?react';

export interface TypeoldProps {
  className?: string;
}

/**
 * Typeold
 *
 * Original name: Type=Old
 * SVG file: Typeold--2419-631.svg
 */
export const Typeold: React.FC<TypeoldProps> = ({ className }) => {
  return <IconSvg className={`typeold ${className || ''}`} />;
};
