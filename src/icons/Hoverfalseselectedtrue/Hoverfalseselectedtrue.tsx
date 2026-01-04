import React from 'react';
import './Hoverfalseselectedtrue.css';
import IconSvg from '../assets/icons/Hoverfalseselectedtrue--2456-145.svg?react';

export interface HoverfalseselectedtrueProps {
  className?: string;
}

/**
 * Hoverfalseselectedtrue
 *
 * Original name: Hover=False, Selected=True
 * SVG file: Hoverfalseselectedtrue--2456-145.svg
 */
export const Hoverfalseselectedtrue: React.FC<HoverfalseselectedtrueProps> = ({
  className,
}) => {
  return <IconSvg className={`hoverfalseselectedtrue ${className || ''}`} />;
};
