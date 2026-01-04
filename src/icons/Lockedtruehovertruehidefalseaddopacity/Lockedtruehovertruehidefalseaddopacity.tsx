import React from 'react';
import './Lockedtruehovertruehidefalseaddopacity.css';
import IconSvg from '../assets/icons/Lockedtruehovertruehidefalseaddopacity--3048-9264.svg?react';

export interface LockedtruehovertruehidefalseaddopacityProps {
  className?: string;
}

/**
 * Lockedtruehovertruehidefalseaddopacity
 *
 * Original name: Locked=True, Hover=True, Hide=False, Add=Opacity
 * SVG file: Lockedtruehovertruehidefalseaddopacity--3048-9264.svg
 */
export const Lockedtruehovertruehidefalseaddopacity: React.FC<
  LockedtruehovertruehidefalseaddopacityProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`lockedtruehovertruehidefalseaddopacity ${className || ''}`}
    />
  );
};
