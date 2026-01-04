import React from 'react';
import './Typevalunitstatefocused.css';
import IconSvg from '../assets/icons/Typevalunitstatefocused--1728-8354.svg?react';

export interface TypevalunitstatefocusedProps {
  className?: string;
}

/**
 * Typevalunitstatefocused
 *
 * Original name: Type=val + unit, State=Focused
 * SVG file: Typevalunitstatefocused--1728-8354.svg
 */
export const Typevalunitstatefocused: React.FC<
  TypevalunitstatefocusedProps
> = ({ className }) => {
  return <IconSvg className={`typevalunitstatefocused ${className || ''}`} />;
};
