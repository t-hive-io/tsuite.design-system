import React from 'react';
import './Lockedfalsehovertruehidefalseaddopacity.css';
import IconSvg from '../assets/icons/Lockedfalsehovertruehidefalseaddopacity--3048-9157.svg?react';

export interface LockedfalsehovertruehidefalseaddopacityProps {
  className?: string;
}

/**
 * Lockedfalsehovertruehidefalseaddopacity
 *
 * Original name: Locked=False, Hover=True, Hide=False, Add=Opacity
 * SVG file: Lockedfalsehovertruehidefalseaddopacity--3048-9157.svg
 */
export const Lockedfalsehovertruehidefalseaddopacity: React.FC<
  LockedfalsehovertruehidefalseaddopacityProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`lockedfalsehovertruehidefalseaddopacity ${className || ''}`}
    />
  );
};
