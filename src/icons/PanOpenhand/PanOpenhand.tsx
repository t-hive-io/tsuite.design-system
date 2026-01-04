import React from 'react';
import './PanOpenhand.css';
import IconSvg from '../assets/icons/PanOpenhand--1091-6755.svg?react';

export interface PanOpenhandProps {
  className?: string;
}

/**
 * PanOpenhand
 *
 * Original name: pan - openhand
 * SVG file: PanOpenhand--1091-6755.svg
 */
export const PanOpenhand: React.FC<PanOpenhandProps> = ({ className }) => {
  return <IconSvg className={`panopenhand ${className || ''}`} />;
};
