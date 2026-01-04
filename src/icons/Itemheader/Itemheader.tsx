import React from 'react';
import './Itemheader.css';
import IconSvg from '../assets/icons/Itemheader--1523-9260.svg?react';

export interface ItemheaderProps {
  className?: string;
}

/**
 * Itemheader
 *
 * Original name: Item header
 * SVG file: Itemheader--1523-9260.svg
 */
export const Itemheader: React.FC<ItemheaderProps> = ({ className }) => {
  return <IconSvg className={`itemheader ${className || ''}`} />;
};
