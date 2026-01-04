import React from 'react';
import './Datalight.css';
import IconSvg from '../assets/icons/Datalight--3832-37284.svg?react';

export interface DatalightProps {
  className?: string;
}

/**
 * Datalight
 *
 * Original name: Data light
 * SVG file: Datalight--3832-37284.svg
 */
export const Datalight: React.FC<DatalightProps> = ({ className }) => {
  return <IconSvg className={`datalight ${className || ''}`} />;
};
