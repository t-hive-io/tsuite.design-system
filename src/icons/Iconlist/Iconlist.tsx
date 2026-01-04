import React from 'react';
import './Iconlist.css';
import IconSvg from '../assets/icons/Iconlist--3023-8248.svg?react';

export interface IconlistProps {
  className?: string;
}

/**
 * Iconlist
 *
 * Original name: Icon list
 * SVG file: Iconlist--3023-8248.svg
 */
export const Iconlist: React.FC<IconlistProps> = ({ className }) => {
  return <IconSvg className={`iconlist ${className || ''}`} />;
};
