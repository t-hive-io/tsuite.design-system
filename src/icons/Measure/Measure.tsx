import React from 'react';
import './Measure.css';
import IconSvg from '../assets/icons/Measure--3098-2712.svg?react';

export interface MeasureProps {
  className?: string;
}

/**
 * Measure
 *
 * Original name: Measure
 * SVG file: Measure--3098-2712.svg
 */
export const Measure: React.FC<MeasureProps> = ({ className }) => {
  return <IconSvg className={`measure ${className || ''}`} />;
};
