import React from 'react';
import './Lockedfalsehovertruehidetrue.css';
import IconSvg from '../assets/icons/Lockedfalsehovertruehidetrue--1522-9436.svg?react';

export interface LockedfalsehovertruehidetrueProps {
  className?: string;
}

/**
 * Lockedfalsehovertruehidetrue
 *
 * Original name: Locked=False, Hover=True, Hide=True
 * SVG file: Lockedfalsehovertruehidetrue--1522-9436.svg
 */
export const Lockedfalsehovertruehidetrue: React.FC<
  LockedfalsehovertruehidetrueProps
> = ({ className }) => {
  return (
    <IconSvg className={`lockedfalsehovertruehidetrue ${className || ''}`} />
  );
};
