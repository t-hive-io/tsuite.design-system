import React from 'react';
import './Rackingillustrationsbasicandadvanced.css';
import IconSvg from '../assets/icons/Rackingillustrationsbasicandadvanced--Beamheight.svg?react';

export interface RackingillustrationsbasicandadvancedProps {
  className?: string;
}

/**
 * Rackingillustrationsbasicandadvanced
 *
 * Original name: Racking illustrations basic and advanced/Beam height
 * SVG file: Rackingillustrationsbasicandadvanced--Beamheight.svg
 */
export const Rackingillustrationsbasicandadvanced: React.FC<
  RackingillustrationsbasicandadvancedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`rackingillustrationsbasicandadvanced ${className || ''}`}
    />
  );
};
