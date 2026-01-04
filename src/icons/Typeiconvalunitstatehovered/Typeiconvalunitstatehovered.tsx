import React from 'react';
import './Typeiconvalunitstatehovered.css';
import IconSvg from '../assets/icons/Typeiconvalunitstatehovered--1728-8425.svg?react';

export interface TypeiconvalunitstatehoveredProps {
  className?: string;
}

/**
 * Typeiconvalunitstatehovered
 *
 * Original name: Type=icon + val + unit, State=Hovered
 * SVG file: Typeiconvalunitstatehovered--1728-8425.svg
 */
export const Typeiconvalunitstatehovered: React.FC<
  TypeiconvalunitstatehoveredProps
> = ({ className }) => {
  return (
    <IconSvg className={`typeiconvalunitstatehovered ${className || ''}`} />
  );
};
