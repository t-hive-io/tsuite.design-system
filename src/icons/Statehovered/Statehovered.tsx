import React from 'react';
import './Statehovered.css';
import IconSvg from '../assets/icons/Statehovered--3838-100676.svg?react';

export interface StatehoveredProps {
  className?: string;
}

/**
 * Statehovered
 *
 * Original name: State=Hovered
 * SVG file: Statehovered--3838-100676.svg
 */
export const Statehovered: React.FC<StatehoveredProps> = ({ className }) => {
  return <IconSvg className={`statehovered ${className || ''}`} />;
};
