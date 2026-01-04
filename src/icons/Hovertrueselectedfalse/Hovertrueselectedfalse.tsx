import React from 'react';
import './Hovertrueselectedfalse.css';
import IconSvg from '../assets/icons/Hovertrueselectedfalse--2453-1720.svg?react';

export interface HovertrueselectedfalseProps {
  className?: string;
}

/**
 * Hovertrueselectedfalse
 *
 * Original name: Hover=True, Selected=False
 * SVG file: Hovertrueselectedfalse--2453-1720.svg
 */
export const Hovertrueselectedfalse: React.FC<HovertrueselectedfalseProps> = ({
  className,
}) => {
  return <IconSvg className={`hovertrueselectedfalse ${className || ''}`} />;
};
