import React from 'react';
import './Sizehorizontal.css';
import IconSvg from '../assets/icons/Sizehorizontal--1125-9012.svg?react';

export interface SizehorizontalProps {
  className?: string;
}

/**
 * Sizehorizontal
 *
 * Original name: Size=Horizontal
 * SVG file: Sizehorizontal--1125-9012.svg
 */
export const Sizehorizontal: React.FC<SizehorizontalProps> = ({
  className,
}) => {
  return <IconSvg className={`sizehorizontal ${className || ''}`} />;
};
