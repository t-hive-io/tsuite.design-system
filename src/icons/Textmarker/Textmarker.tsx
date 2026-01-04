import React from 'react';
import './Textmarker.css';
import IconSvg from '../assets/icons/Textmarker--1523-9707.svg?react';

export interface TextmarkerProps {
  className?: string;
}

/**
 * Textmarker
 *
 * Original name: Text marker
 * SVG file: Textmarker--1523-9707.svg
 */
export const Textmarker: React.FC<TextmarkerProps> = ({ className }) => {
  return <IconSvg className={`textmarker ${className || ''}`} />;
};
