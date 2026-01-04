import React from 'react';
import './Arrowtoprightlighttrue.css';
import IconSvg from '../assets/icons/Arrowtoprightlighttrue--1263-8352.svg?react';

export interface ArrowtoprightlighttrueProps {
  className?: string;
}

/**
 * Arrowtoprightlighttrue
 *
 * Original name: Arrow=Top right, Light=true
 * SVG file: Arrowtoprightlighttrue--1263-8352.svg
 */
export const Arrowtoprightlighttrue: React.FC<ArrowtoprightlighttrueProps> = ({
  className,
}) => {
  return <IconSvg className={`arrowtoprightlighttrue ${className || ''}`} />;
};
