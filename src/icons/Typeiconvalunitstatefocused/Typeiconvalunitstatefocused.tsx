import React from 'react';
import './Typeiconvalunitstatefocused.css';
import IconSvg from '../assets/icons/Typeiconvalunitstatefocused--1728-8477.svg?react';

export interface TypeiconvalunitstatefocusedProps {
  className?: string;
}

/**
 * Typeiconvalunitstatefocused
 *
 * Original name: Type=icon + val + unit, State=Focused
 * SVG file: Typeiconvalunitstatefocused--1728-8477.svg
 */
export const Typeiconvalunitstatefocused: React.FC<
  TypeiconvalunitstatefocusedProps
> = ({ className }) => {
  return (
    <IconSvg className={`typeiconvalunitstatefocused ${className || ''}`} />
  );
};
