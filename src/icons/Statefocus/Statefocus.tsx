import React from 'react';
import './Statefocus.css';
import IconSvg from '../assets/icons/Statefocus--4875-38352.svg?react';

export interface StatefocusProps {
  className?: string;
}

/**
 * Statefocus
 *
 * Original name: State=Focus
 * SVG file: Statefocus--4875-38352.svg
 */
export const Statefocus: React.FC<StatefocusProps> = ({ className }) => {
  return <IconSvg className={`statefocus ${className || ''}`} />;
};
