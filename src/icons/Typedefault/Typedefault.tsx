import React from 'react';
import './Typedefault.css';
import IconSvg from '../assets/icons/Typedefault--1504-9106.svg?react';

export interface TypedefaultProps {
  className?: string;
}

/**
 * Typedefault
 *
 * Original name: Type=Default
 * SVG file: Typedefault--1504-9106.svg
 */
export const Typedefault: React.FC<TypedefaultProps> = ({ className }) => {
  return <IconSvg className={`typedefault ${className || ''}`} />;
};
