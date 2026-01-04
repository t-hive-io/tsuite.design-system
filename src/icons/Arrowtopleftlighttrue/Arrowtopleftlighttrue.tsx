import React from 'react';
import './Arrowtopleftlighttrue.css';
import IconSvg from '../assets/icons/Arrowtopleftlighttrue--1263-8347.svg?react';

export interface ArrowtopleftlighttrueProps {
  className?: string;
}

/**
 * Arrowtopleftlighttrue
 *
 * Original name: Arrow=Top left, Light=true
 * SVG file: Arrowtopleftlighttrue--1263-8347.svg
 */
export const Arrowtopleftlighttrue: React.FC<ArrowtopleftlighttrueProps> = ({
  className,
}) => {
  return <IconSvg className={`arrowtopleftlighttrue ${className || ''}`} />;
};
