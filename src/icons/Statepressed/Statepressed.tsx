import React from 'react';
import './Statepressed.css';
import IconSvg from '../assets/icons/Statepressed--4875-38382.svg?react';

export interface StatepressedProps {
  className?: string;
}

/**
 * Statepressed
 *
 * Original name: State=Pressed
 * SVG file: Statepressed--4875-38382.svg
 */
export const Statepressed: React.FC<StatepressedProps> = ({ className }) => {
  return <IconSvg className={`statepressed ${className || ''}`} />;
};
