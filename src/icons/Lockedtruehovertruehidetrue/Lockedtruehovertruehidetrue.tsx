import React from 'react';
import './Lockedtruehovertruehidetrue.css';
import IconSvg from '../assets/icons/Lockedtruehovertruehidetrue--1522-9456.svg?react';

export interface LockedtruehovertruehidetrueProps {
  className?: string;
}

/**
 * Lockedtruehovertruehidetrue
 *
 * Original name: Locked=True, Hover=True, Hide=True
 * SVG file: Lockedtruehovertruehidetrue--1522-9456.svg
 */
export const Lockedtruehovertruehidetrue: React.FC<
  LockedtruehovertruehidetrueProps
> = ({ className }) => {
  return (
    <IconSvg className={`lockedtruehovertruehidetrue ${className || ''}`} />
  );
};
