import React from 'react';
import './Typerowtagselecteddefault.css';
import IconSvg from '../assets/icons/Typerowtagselecteddefault--3158-10488.svg?react';

export interface TyperowtagselecteddefaultProps {
  className?: string;
}

/**
 * Typerowtagselecteddefault
 *
 * Original name: Type=Row tag, Selected=Default
 * SVG file: Typerowtagselecteddefault--3158-10488.svg
 */
export const Typerowtagselecteddefault: React.FC<
  TyperowtagselecteddefaultProps
> = ({ className }) => {
  return <IconSvg className={`typerowtagselecteddefault ${className || ''}`} />;
};
