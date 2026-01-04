import React from 'react';
import './Tugg.css';
import IconSvg from '../assets/icons/Tugg--4842-37921.svg?react';

export interface TuggProps {
  className?: string;
}

/**
 * Tugg
 *
 * Original name: Tugg
 * SVG file: Tugg--4842-37921.svg
 */
export const Tugg: React.FC<TuggProps> = ({ className }) => {
  return <IconSvg className={`tugg ${className || ''}`} />;
};
