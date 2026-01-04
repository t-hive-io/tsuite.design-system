import React from 'react';
import './Lockedtruehovertruehidetrueaddopacity.css';
import IconSvg from '../assets/icons/Lockedtruehovertruehidetrueaddopacity--3048-9274.svg?react';

export interface LockedtruehovertruehidetrueaddopacityProps {
  className?: string;
}

/**
 * Lockedtruehovertruehidetrueaddopacity
 *
 * Original name: Locked=True, Hover=True, Hide=True, Add=Opacity
 * SVG file: Lockedtruehovertruehidetrueaddopacity--3048-9274.svg
 */
export const Lockedtruehovertruehidetrueaddopacity: React.FC<
  LockedtruehovertruehidetrueaddopacityProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`lockedtruehovertruehidetrueaddopacity ${className || ''}`}
    />
  );
};
