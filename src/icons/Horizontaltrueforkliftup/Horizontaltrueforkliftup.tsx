import React from 'react';
import './Horizontaltrueforkliftup.css';
import IconSvg from '../assets/icons/Horizontaltrueforkliftup--1844-9565.svg?react';

export interface HorizontaltrueforkliftupProps {
  className?: string;
}

/**
 * Horizontaltrueforkliftup
 *
 * Original name: Horizontal=True, Forklift=Up
 * SVG file: Horizontaltrueforkliftup--1844-9565.svg
 */
export const Horizontaltrueforkliftup: React.FC<
  HorizontaltrueforkliftupProps
> = ({ className }) => {
  return <IconSvg className={`horizontaltrueforkliftup ${className || ''}`} />;
};
