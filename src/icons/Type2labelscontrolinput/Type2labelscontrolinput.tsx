import React from 'react';
import './Type2labelscontrolinput.css';
import IconSvg from '../assets/icons/Type2labelscontrolinput--1924-7941.svg?react';

export interface Type2labelscontrolinputProps {
  className?: string;
}

/**
 * Type2labelscontrolinput
 *
 * Original name: Type=2 labels + control + input
 * SVG file: Type2labelscontrolinput--1924-7941.svg
 */
export const Type2labelscontrolinput: React.FC<
  Type2labelscontrolinputProps
> = ({ className }) => {
  return <IconSvg className={`type2labelscontrolinput ${className || ''}`} />;
};
