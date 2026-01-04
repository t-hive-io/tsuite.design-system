import React from 'react';
import './Pentool.css';
import IconSvg from '../assets/icons/Pentool--1091-6754.svg?react';

export interface PentoolProps {
  className?: string;
}

/**
 * Pentool
 *
 * Original name: pentool
 * SVG file: Pentool--1091-6754.svg
 */
export const Pentool: React.FC<PentoolProps> = ({ className }) => {
  return <IconSvg className={`pentool ${className || ''}`} />;
};
