import React from 'react';
import './Horizontaltrueforkliftdown.css';
import IconSvg from '../assets/icons/Horizontaltrueforkliftdown--1844-9066.svg?react';

export interface HorizontaltrueforkliftdownProps {
  className?: string;
}

/**
 * Horizontaltrueforkliftdown
 *
 * Original name: Horizontal=True, Forklift=Down
 * SVG file: Horizontaltrueforkliftdown--1844-9066.svg
 */
export const Horizontaltrueforkliftdown: React.FC<
  HorizontaltrueforkliftdownProps
> = ({ className }) => {
  return (
    <IconSvg className={`horizontaltrueforkliftdown ${className || ''}`} />
  );
};
