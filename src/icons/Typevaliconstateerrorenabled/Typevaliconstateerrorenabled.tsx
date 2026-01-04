import React from 'react';
import './Typevaliconstateerrorenabled.css';
import IconSvg from '../assets/icons/Typevaliconstateerrorenabled--5460-16722.svg?react';

export interface TypevaliconstateerrorenabledProps {
  className?: string;
}

/**
 * Typevaliconstateerrorenabled
 *
 * Original name: Type=val + icon, State=Error enabled
 * SVG file: Typevaliconstateerrorenabled--5460-16722.svg
 */
export const Typevaliconstateerrorenabled: React.FC<
  TypevaliconstateerrorenabledProps
> = ({ className }) => {
  return (
    <IconSvg className={`typevaliconstateerrorenabled ${className || ''}`} />
  );
};
