import React from 'react';
import './Arrowrightlighttrue.css';
import IconSvg from '../assets/icons/Arrowrightlighttrue--1262-8262.svg?react';

export interface ArrowrightlighttrueProps {
  className?: string;
}

/**
 * Arrowrightlighttrue
 *
 * Original name: Arrow=Right, Light=true
 * SVG file: Arrowrightlighttrue--1262-8262.svg
 */
export const Arrowrightlighttrue: React.FC<ArrowrightlighttrueProps> = ({
  className,
}) => {
  return <IconSvg className={`arrowrightlighttrue ${className || ''}`} />;
};
