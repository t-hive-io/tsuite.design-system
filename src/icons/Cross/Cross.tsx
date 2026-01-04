import React from 'react';
import './Cross.css';
import IconSvg from '../assets/icons/Cross--1091-6751.svg?react';

export interface CrossProps {
  className?: string;
}

/**
 * Cross
 *
 * Original name: cross
 * SVG file: Cross--1091-6751.svg
 */
export const Cross: React.FC<CrossProps> = ({ className }) => {
  return <IconSvg className={`cross ${className || ''}`} />;
};
