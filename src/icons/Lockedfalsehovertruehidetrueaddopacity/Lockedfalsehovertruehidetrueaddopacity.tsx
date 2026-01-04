import React from 'react';
import './Lockedfalsehovertruehidetrueaddopacity.css';
import IconSvg from '../assets/icons/Lockedfalsehovertruehidetrueaddopacity--3048-9269.svg?react';

export interface LockedfalsehovertruehidetrueaddopacityProps {
  className?: string;
}

/**
 * Lockedfalsehovertruehidetrueaddopacity
 *
 * Original name: Locked=False, Hover=True, Hide=True, Add=Opacity
 * SVG file: Lockedfalsehovertruehidetrueaddopacity--3048-9269.svg
 */
export const Lockedfalsehovertruehidetrueaddopacity: React.FC<
  LockedfalsehovertruehidetrueaddopacityProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`lockedfalsehovertruehidetrueaddopacity ${className || ''}`}
    />
  );
};
