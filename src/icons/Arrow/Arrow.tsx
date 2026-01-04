import React from 'react';
import './Arrow.css';
import IconSvg from '../assets/icons/Arrow--1091-6752.svg?react';

export interface ArrowProps {
  className?: string;
}

/**
 * Arrow
 *
 * Original name: arrow
 * SVG file: Arrow--1091-6752.svg
 */
export const Arrow: React.FC<ArrowProps> = ({ className }) => {
  return <IconSvg className={`arrow ${className || ''}`} />;
};
