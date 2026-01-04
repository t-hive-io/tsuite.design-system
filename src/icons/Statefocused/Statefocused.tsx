import React from 'react';
import './Statefocused.css';
import IconSvg from '../assets/icons/Statefocused--3838-100736.svg?react';

export interface StatefocusedProps {
  className?: string;
}

/**
 * Statefocused
 *
 * Original name: State=Focused
 * SVG file: Statefocused--3838-100736.svg
 */
export const Statefocused: React.FC<StatefocusedProps> = ({ className }) => {
  return <IconSvg className={`statefocused ${className || ''}`} />;
};
