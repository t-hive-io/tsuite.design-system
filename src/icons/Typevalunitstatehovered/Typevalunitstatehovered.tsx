import React from 'react';
import './Typevalunitstatehovered.css';
import IconSvg from '../assets/icons/Typevalunitstatehovered--1728-8422.svg?react';

export interface TypevalunitstatehoveredProps {
  className?: string;
}

/**
 * Typevalunitstatehovered
 *
 * Original name: Type=val + unit, State=Hovered
 * SVG file: Typevalunitstatehovered--1728-8422.svg
 */
export const Typevalunitstatehovered: React.FC<
  TypevalunitstatehoveredProps
> = ({ className }) => {
  return <IconSvg className={`typevalunitstatehovered ${className || ''}`} />;
};
