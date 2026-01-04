import React from 'react';
import './Lockedtruehovertruehidefalse.css';
import IconSvg from '../assets/icons/Lockedtruehovertruehidefalse--1522-9369.svg?react';

export interface LockedtruehovertruehidefalseProps {
  className?: string;
}

/**
 * Lockedtruehovertruehidefalse
 *
 * Original name: Locked=True, Hover=True, Hide=False
 * SVG file: Lockedtruehovertruehidefalse--1522-9369.svg
 */
export const Lockedtruehovertruehidefalse: React.FC<
  LockedtruehovertruehidefalseProps
> = ({ className }) => {
  return (
    <IconSvg className={`lockedtruehovertruehidefalse ${className || ''}`} />
  );
};
