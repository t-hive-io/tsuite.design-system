import React from 'react';
import './Position2.css';
import IconSvg from '../assets/icons/Position2--1554-9412.svg?react';

export interface Position2Props {
  className?: string;
}

/**
 * Position2
 *
 * Original name: Position=2
 * SVG file: Position2--1554-9412.svg
 */
export const Position2: React.FC<Position2Props> = ({ className }) => {
  return <IconSvg className={`position2 ${className || ''}`} />;
};
