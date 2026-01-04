import React from 'react';
import './Typevaliconstateerrorhover.css';
import IconSvg from '../assets/icons/Typevaliconstateerrorhover--5461-16789.svg?react';

export interface TypevaliconstateerrorhoverProps {
  className?: string;
}

/**
 * Typevaliconstateerrorhover
 *
 * Original name: Type=val + icon, State=Error hover
 * SVG file: Typevaliconstateerrorhover--5461-16789.svg
 */
export const Typevaliconstateerrorhover: React.FC<
  TypevaliconstateerrorhoverProps
> = ({ className }) => {
  return (
    <IconSvg className={`typevaliconstateerrorhover ${className || ''}`} />
  );
};
