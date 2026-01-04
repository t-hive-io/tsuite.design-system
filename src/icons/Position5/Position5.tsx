import React from 'react';
import './Position5.css';
import IconSvg from '../assets/icons/Position5--1554-9440.svg?react';

export interface Position5Props {
  className?: string;
}

/**
 * Position5
 *
 * Original name: Position=5
 * SVG file: Position5--1554-9440.svg
 */
export const Position5: React.FC<Position5Props> = ({ className }) => {
  return <IconSvg className={`position5 ${className || ''}`} />;
};
