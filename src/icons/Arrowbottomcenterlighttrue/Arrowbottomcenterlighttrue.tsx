import React from 'react';
import './Arrowbottomcenterlighttrue.css';
import IconSvg from '../assets/icons/Arrowbottomcenterlighttrue--3266-25.svg?react';

export interface ArrowbottomcenterlighttrueProps {
  className?: string;
}

/**
 * Arrowbottomcenterlighttrue
 *
 * Original name: Arrow=Bottom Center, Light=true
 * SVG file: Arrowbottomcenterlighttrue--3266-25.svg
 */
export const Arrowbottomcenterlighttrue: React.FC<
  ArrowbottomcenterlighttrueProps
> = ({ className }) => {
  return (
    <IconSvg className={`arrowbottomcenterlighttrue ${className || ''}`} />
  );
};
