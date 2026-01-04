import React from 'react';
import './Position1.css';
import IconSvg from '../assets/icons/Position1--1554-9409.svg?react';

export interface Position1Props {
  className?: string;
}

/**
 * Position1
 *
 * Original name: Position=1
 * SVG file: Position1--1554-9409.svg
 */
export const Position1: React.FC<Position1Props> = ({ className }) => {
  return <IconSvg className={`position1 ${className || ''}`} />;
};
