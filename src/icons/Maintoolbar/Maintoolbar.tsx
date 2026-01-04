import React from 'react';
import './Maintoolbar.css';
import IconSvg from '../assets/icons/Maintoolbar--Toolbar.svg?react';

export interface MaintoolbarProps {
  className?: string;
}

/**
 * Maintoolbar
 *
 * Original name: Main Toolbar/Toolbar
 * SVG file: Maintoolbar--Toolbar.svg
 */
export const Maintoolbar: React.FC<MaintoolbarProps> = ({ className }) => {
  return <IconSvg className={`maintoolbar ${className || ''}`} />;
};
