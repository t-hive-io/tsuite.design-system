import React from 'react';
import './Lockedtruehoverfalsehidetrue.css';
import IconSvg from '../assets/icons/Lockedtruehoverfalsehidetrue--1522-9417.svg?react';

export interface LockedtruehoverfalsehidetrueProps {
  className?: string;
}

/**
 * Lockedtruehoverfalsehidetrue
 *
 * Original name: Locked=True, Hover=False, Hide=True
 * SVG file: Lockedtruehoverfalsehidetrue--1522-9417.svg
 */
export const Lockedtruehoverfalsehidetrue: React.FC<
  LockedtruehoverfalsehidetrueProps
> = ({ className }) => {
  return (
    <IconSvg className={`lockedtruehoverfalsehidetrue ${className || ''}`} />
  );
};
