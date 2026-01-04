import React from 'react';
import './Statehoverclose.css';
import IconSvg from '../assets/icons/Statehoverclose--4875-38337.svg?react';

export interface StatehovercloseProps {
  className?: string;
}

/**
 * Statehoverclose
 *
 * Original name: State=Hover close
 * SVG file: Statehoverclose--4875-38337.svg
 */
export const Statehoverclose: React.FC<StatehovercloseProps> = ({
  className,
}) => {
  return <IconSvg className={`statehoverclose ${className || ''}`} />;
};
