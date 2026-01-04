import React from 'react';
import './Horizontalfalseforkliftright.css';
import IconSvg from '../assets/icons/Horizontalfalseforkliftright--1844-9723.svg?react';

export interface HorizontalfalseforkliftrightProps {
  className?: string;
}

/**
 * Horizontalfalseforkliftright
 *
 * Original name: Horizontal=False, Forklift=Right
 * SVG file: Horizontalfalseforkliftright--1844-9723.svg
 */
export const Horizontalfalseforkliftright: React.FC<
  HorizontalfalseforkliftrightProps
> = ({ className }) => {
  return (
    <IconSvg className={`horizontalfalseforkliftright ${className || ''}`} />
  );
};
