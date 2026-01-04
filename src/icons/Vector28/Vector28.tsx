import React from 'react';
import './Vector28.css';
import IconSvg from '../assets/icons/Vector28--3172-1308.svg?react';

export interface Vector28Props {
  className?: string;
}

/**
 * Vector28
 *
 * Original name: Vector 28
 * SVG file: Vector28--3172-1308.svg
 */
export const Vector28: React.FC<Vector28Props> = ({ className }) => {
  return <IconSvg className={`vector28 ${className || ''}`} />;
};
