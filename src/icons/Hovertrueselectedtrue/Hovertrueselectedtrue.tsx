import React from 'react';
import './Hovertrueselectedtrue.css';
import IconSvg from '../assets/icons/Hovertrueselectedtrue--2456-111.svg?react';

export interface HovertrueselectedtrueProps {
  className?: string;
}

/**
 * Hovertrueselectedtrue
 *
 * Original name: Hover=True, Selected=True
 * SVG file: Hovertrueselectedtrue--2456-111.svg
 */
export const Hovertrueselectedtrue: React.FC<HovertrueselectedtrueProps> = ({
  className,
}) => {
  return <IconSvg className={`hovertrueselectedtrue ${className || ''}`} />;
};
