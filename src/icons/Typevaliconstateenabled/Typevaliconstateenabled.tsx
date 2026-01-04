import React from 'react';
import './Typevaliconstateenabled.css';
import IconSvg from '../assets/icons/Typevaliconstateenabled--1728-8338.svg?react';

export interface TypevaliconstateenabledProps {
  className?: string;
}

/**
 * Typevaliconstateenabled
 *
 * Original name: Type=val + icon, State=Enabled
 * SVG file: Typevaliconstateenabled--1728-8338.svg
 */
export const Typevaliconstateenabled: React.FC<
  TypevaliconstateenabledProps
> = ({ className }) => {
  return <IconSvg className={`typevaliconstateenabled ${className || ''}`} />;
};
