import React from 'react';
import './Arrowtopcenterlighttrue.css';
import IconSvg from '../assets/icons/Arrowtopcenterlighttrue--3236-159372.svg?react';

export interface ArrowtopcenterlighttrueProps {
  className?: string;
}

/**
 * Arrowtopcenterlighttrue
 *
 * Original name: Arrow=Top Center, Light=true
 * SVG file: Arrowtopcenterlighttrue--3236-159372.svg
 */
export const Arrowtopcenterlighttrue: React.FC<
  ArrowtopcenterlighttrueProps
> = ({ className }) => {
  return <IconSvg className={`arrowtopcenterlighttrue ${className || ''}`} />;
};
