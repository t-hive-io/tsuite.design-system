import React from 'react';
import './Expandedfalse.css';
import IconSvg from '../assets/icons/Expandedfalse--1084-6846.svg?react';

export interface ExpandedfalseProps {
  className?: string;
}

/**
 * Expandedfalse
 *
 * Original name: Expanded=False
 * SVG file: Expandedfalse--1084-6846.svg
 */
export const Expandedfalse: React.FC<ExpandedfalseProps> = ({ className }) => {
  return <IconSvg className={`expandedfalse ${className || ''}`} />;
};
