import React from 'react';
import './Position4.css';
import IconSvg from '../assets/icons/Position4--1554-9418.svg?react';

export interface Position4Props {
  className?: string;
}

/**
 * Position4
 *
 * Original name: Position=4
 * SVG file: Position4--1554-9418.svg
 */
export const Position4: React.FC<Position4Props> = ({ className }) => {
  return <IconSvg className={`position4 ${className || ''}`} />;
};
