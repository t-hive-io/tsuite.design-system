import React from 'react';
import './Editcursor.css';
import IconSvg from '../assets/icons/Editcursor--3171-1270.svg?react';

export interface EditcursorProps {
  className?: string;
}

/**
 * Editcursor
 *
 * Original name: Edit cursor
 * SVG file: Editcursor--3171-1270.svg
 */
export const Editcursor: React.FC<EditcursorProps> = ({ className }) => {
  return <IconSvg className={`editcursor ${className || ''}`} />;
};
