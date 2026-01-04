import React from 'react';
import './Hoverfalseselectedfalse.css';
import IconSvg from '../assets/icons/Hoverfalseselectedfalse--2453-1693.svg?react';

export interface HoverfalseselectedfalseProps {
  className?: string;
}

/**
 * Hoverfalseselectedfalse
 *
 * Original name: Hover=False, Selected=False
 * SVG file: Hoverfalseselectedfalse--2453-1693.svg
 */
export const Hoverfalseselectedfalse: React.FC<
  HoverfalseselectedfalseProps
> = ({ className }) => {
  return <IconSvg className={`hoverfalseselectedfalse ${className || ''}`} />;
};
