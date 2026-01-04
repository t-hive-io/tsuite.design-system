import React from 'react';
import './Typenumberstatehovered.css';
import IconSvg from '../assets/icons/Typenumberstatehovered--1728-8440.svg?react';

export interface TypenumberstatehoveredProps {
  className?: string;
}

/**
 * Typenumberstatehovered
 *
 * Original name: Type=number, State=Hovered
 * SVG file: Typenumberstatehovered--1728-8440.svg
 */
export const Typenumberstatehovered: React.FC<TypenumberstatehoveredProps> = ({
  className,
}) => {
  return <IconSvg className={`typenumberstatehovered ${className || ''}`} />;
};
