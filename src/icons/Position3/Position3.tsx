import React from 'react';
import './Position3.css';
import IconSvg from '../assets/icons/Position3--1554-9415.svg?react';

export interface Position3Props {
  className?: string;
}

/**
 * Position3
 *
 * Original name: Position=3
 * SVG file: Position3--1554-9415.svg
 */
export const Position3: React.FC<Position3Props> = ({ className }) => {
  return <IconSvg className={`position3 ${className || ''}`} />;
};
