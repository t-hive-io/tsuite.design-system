import React from 'react';
import './Inputlargelist.css';
import IconSvg from '../assets/icons/Inputlargelist--5506-270.svg?react';

export interface InputlargelistProps {
  className?: string;
}

/**
 * Inputlargelist
 *
 * Original name: Input large list
 * SVG file: Inputlargelist--5506-270.svg
 */
export const Inputlargelist: React.FC<InputlargelistProps> = ({
  className,
}) => {
  return <IconSvg className={`inputlargelist ${className || ''}`} />;
};
