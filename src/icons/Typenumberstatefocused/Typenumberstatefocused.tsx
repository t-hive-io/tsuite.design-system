import React from 'react';
import './Typenumberstatefocused.css';
import IconSvg from '../assets/icons/Typenumberstatefocused--1728-8334.svg?react';

export interface TypenumberstatefocusedProps {
  className?: string;
}

/**
 * Typenumberstatefocused
 *
 * Original name: Type=Number, State=Focused
 * SVG file: Typenumberstatefocused--1728-8334.svg
 */
export const Typenumberstatefocused: React.FC<TypenumberstatefocusedProps> = ({
  className,
}) => {
  return <IconSvg className={`typenumberstatefocused ${className || ''}`} />;
};
