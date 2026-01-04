import React from 'react';
import './Tabbarright.css';
import IconSvg from '../assets/icons/Tabbarright--1085-6696.svg?react';

export interface TabbarrightProps {
  className?: string;
}

/**
 * Tabbarright
 *
 * Original name: Tab bar right
 * SVG file: Tabbarright--1085-6696.svg
 */
export const Tabbarright: React.FC<TabbarrightProps> = ({ className }) => {
  return <IconSvg className={`tabbarright ${className || ''}`} />;
};
