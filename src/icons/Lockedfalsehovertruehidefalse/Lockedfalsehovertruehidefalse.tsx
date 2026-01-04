import React from 'react';
import './Lockedfalsehovertruehidefalse.css';
import IconSvg from '../assets/icons/Lockedfalsehovertruehidefalse--1522-9387.svg?react';

export interface LockedfalsehovertruehidefalseProps {
  className?: string;
}

/**
 * Lockedfalsehovertruehidefalse
 *
 * Original name: Locked=False, Hover=True, Hide=False
 * SVG file: Lockedfalsehovertruehidefalse--1522-9387.svg
 */
export const Lockedfalsehovertruehidefalse: React.FC<
  LockedfalsehovertruehidefalseProps
> = ({ className }) => {
  return (
    <IconSvg className={`lockedfalsehovertruehidefalse ${className || ''}`} />
  );
};
