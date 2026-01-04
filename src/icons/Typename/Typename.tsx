import React from 'react';
import './Typename.css';
import IconSvg from '../assets/icons/Typename--1841-8471.svg?react';

export interface TypenameProps {
  className?: string;
}

/**
 * Typename
 *
 * Original name: Type=Name
 * SVG file: Typename--1841-8471.svg
 */
export const Typename: React.FC<TypenameProps> = ({ className }) => {
  return <IconSvg className={`typename ${className || ''}`} />;
};
