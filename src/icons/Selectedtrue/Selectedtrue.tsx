import React from 'react';
import './Selectedtrue.css';
import IconSvg from '../assets/icons/Selectedtrue--1085-6703.svg?react';

export interface SelectedtrueProps {
  className?: string;
}

/**
 * Selectedtrue
 *
 * Original name: Selected=True
 * SVG file: Selectedtrue--1085-6703.svg
 */
export const Selectedtrue: React.FC<SelectedtrueProps> = ({ className }) => {
  return <IconSvg className={`selectedtrue ${className || ''}`} />;
};
