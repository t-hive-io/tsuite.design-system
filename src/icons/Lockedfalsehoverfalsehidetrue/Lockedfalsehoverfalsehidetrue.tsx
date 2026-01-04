import React from 'react';
import './Lockedfalsehoverfalsehidetrue.css';
import IconSvg from '../assets/icons/Lockedfalsehoverfalsehidetrue--1522-9414.svg?react';

export interface LockedfalsehoverfalsehidetrueProps {
  className?: string;
}

/**
 * Lockedfalsehoverfalsehidetrue
 *
 * Original name: Locked=False, Hover=False, Hide=True
 * SVG file: Lockedfalsehoverfalsehidetrue--1522-9414.svg
 */
export const Lockedfalsehoverfalsehidetrue: React.FC<
  LockedfalsehoverfalsehidetrueProps
> = ({ className }) => {
  return (
    <IconSvg className={`lockedfalsehoverfalsehidetrue ${className || ''}`} />
  );
};
