import React from 'react';
import './Lockedtruehoverfalsehidefalse.css';
import IconSvg from '../assets/icons/Lockedtruehoverfalsehidefalse--1522-9368.svg?react';

export interface LockedtruehoverfalsehidefalseProps {
  className?: string;
}

/**
 * Lockedtruehoverfalsehidefalse
 *
 * Original name: Locked=True, Hover=False, Hide=False
 * SVG file: Lockedtruehoverfalsehidefalse--1522-9368.svg
 */
export const Lockedtruehoverfalsehidefalse: React.FC<
  LockedtruehoverfalsehidefalseProps
> = ({ className }) => {
  return (
    <IconSvg className={`lockedtruehoverfalsehidefalse ${className || ''}`} />
  );
};
