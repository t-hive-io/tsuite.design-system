import React from 'react';
import './Typetextstatefocused.css';
import IconSvg from '../assets/icons/Typetextstatefocused--1728-8490.svg?react';

export interface TypetextstatefocusedProps {
  className?: string;
}

/**
 * Typetextstatefocused
 *
 * Original name: Type=text, State=Focused
 * SVG file: Typetextstatefocused--1728-8490.svg
 */
export const Typetextstatefocused: React.FC<TypetextstatefocusedProps> = ({
  className,
}) => {
  return <IconSvg className={`typetextstatefocused ${className || ''}`} />;
};
