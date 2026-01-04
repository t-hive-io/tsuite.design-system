import React from 'react';
import './Type2labelscontrolicon.css';
import IconSvg from '../assets/icons/Type2labelscontrolicon--1543-9351.svg?react';

export interface Type2labelscontroliconProps {
  className?: string;
}

/**
 * Type2labelscontrolicon
 *
 * Original name: Type=2 labels + control + icon
 * SVG file: Type2labelscontrolicon--1543-9351.svg
 */
export const Type2labelscontrolicon: React.FC<Type2labelscontroliconProps> = ({
  className,
}) => {
  return <IconSvg className={`type2labelscontrolicon ${className || ''}`} />;
};
