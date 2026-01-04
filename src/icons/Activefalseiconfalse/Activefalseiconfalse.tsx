import React from 'react';
import './Activefalseiconfalse.css';
import IconSvg from '../assets/icons/Activefalseiconfalse--1125-8911.svg?react';

export interface ActivefalseiconfalseProps {
  className?: string;
}

/**
 * Activefalseiconfalse
 *
 * Original name: Active=False, Icon=False
 * SVG file: Activefalseiconfalse--1125-8911.svg
 */
export const Activefalseiconfalse: React.FC<ActivefalseiconfalseProps> = ({
  className,
}) => {
  return <IconSvg className={`activefalseiconfalse ${className || ''}`} />;
};
