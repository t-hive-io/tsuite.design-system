import React from 'react';
import './Statebeta.css';
import IconSvg from '../assets/icons/Statebeta--3059-7987.svg?react';

export interface StatebetaProps {
  className?: string;
}

/**
 * Statebeta
 *
 * Original name: State=BETA
 * SVG file: Statebeta--3059-7987.svg
 */
export const Statebeta: React.FC<StatebetaProps> = ({ className }) => {
  return <IconSvg className={`statebeta ${className || ''}`} />;
};
