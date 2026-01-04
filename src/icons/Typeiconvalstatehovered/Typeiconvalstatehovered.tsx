import React from 'react';
import './Typeiconvalstatehovered.css';
import IconSvg from '../assets/icons/Typeiconvalstatehovered--1728-8430.svg?react';

export interface TypeiconvalstatehoveredProps {
  className?: string;
}

/**
 * Typeiconvalstatehovered
 *
 * Original name: Type=icon + val, State=Hovered
 * SVG file: Typeiconvalstatehovered--1728-8430.svg
 */
export const Typeiconvalstatehovered: React.FC<
  TypeiconvalstatehoveredProps
> = ({ className }) => {
  return <IconSvg className={`typeiconvalstatehovered ${className || ''}`} />;
};
