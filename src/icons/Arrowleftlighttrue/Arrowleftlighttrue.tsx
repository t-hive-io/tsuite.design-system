import React from 'react';
import './Arrowleftlighttrue.css';
import IconSvg from '../assets/icons/Arrowleftlighttrue--1262-8264.svg?react';

export interface ArrowleftlighttrueProps {
  className?: string;
}

/**
 * Arrowleftlighttrue
 *
 * Original name: Arrow=Left, Light=true
 * SVG file: Arrowleftlighttrue--1262-8264.svg
 */
export const Arrowleftlighttrue: React.FC<ArrowleftlighttrueProps> = ({
  className,
}) => {
  return <IconSvg className={`arrowleftlighttrue ${className || ''}`} />;
};
