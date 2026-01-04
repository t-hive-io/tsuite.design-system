import React from 'react';
import './Typevaliconstatehovered.css';
import IconSvg from '../assets/icons/Typevaliconstatehovered--1728-8435.svg?react';

export interface TypevaliconstatehoveredProps {
  className?: string;
}

/**
 * Typevaliconstatehovered
 *
 * Original name: Type=val + icon, State=Hovered
 * SVG file: Typevaliconstatehovered--1728-8435.svg
 */
export const Typevaliconstatehovered: React.FC<
  TypevaliconstatehoveredProps
> = ({ className }) => {
  return <IconSvg className={`typevaliconstatehovered ${className || ''}`} />;
};
