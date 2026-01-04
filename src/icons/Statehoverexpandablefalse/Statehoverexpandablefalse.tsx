import React from 'react';
import './Statehoverexpandablefalse.css';
import IconSvg from '../assets/icons/Statehoverexpandablefalse--1081-6447.svg?react';

export interface StatehoverexpandablefalseProps {
  className?: string;
}

/**
 * Statehoverexpandablefalse
 *
 * Original name: State=Hover, Expandable=False
 * SVG file: Statehoverexpandablefalse--1081-6447.svg
 */
export const Statehoverexpandablefalse: React.FC<
  StatehoverexpandablefalseProps
> = ({ className }) => {
  return <IconSvg className={`statehoverexpandablefalse ${className || ''}`} />;
};
