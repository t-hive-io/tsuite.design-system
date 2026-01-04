import React from 'react';
import './Selectedfalse.css';
import IconSvg from '../assets/icons/Selectedfalse--1085-6701.svg?react';

export interface SelectedfalseProps {
  className?: string;
}

/**
 * Selectedfalse
 *
 * Original name: Selected=False
 * SVG file: Selectedfalse--1085-6701.svg
 */
export const Selectedfalse: React.FC<SelectedfalseProps> = ({ className }) => {
  return <IconSvg className={`selectedfalse ${className || ''}`} />;
};
