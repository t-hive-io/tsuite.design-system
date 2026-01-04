import React from 'react';
import './Typeiconvalstatefocused.css';
import IconSvg from '../assets/icons/Typeiconvalstatefocused--1728-8482.svg?react';

export interface TypeiconvalstatefocusedProps {
  className?: string;
}

/**
 * Typeiconvalstatefocused
 *
 * Original name: Type=icon + val, State=Focused
 * SVG file: Typeiconvalstatefocused--1728-8482.svg
 */
export const Typeiconvalstatefocused: React.FC<
  TypeiconvalstatefocusedProps
> = ({ className }) => {
  return <IconSvg className={`typeiconvalstatefocused ${className || ''}`} />;
};
