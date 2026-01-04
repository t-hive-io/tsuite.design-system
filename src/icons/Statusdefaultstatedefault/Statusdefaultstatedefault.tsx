import React from 'react';
import './Statusdefaultstatedefault.css';
import IconSvg from '../assets/icons/Statusdefaultstatedefault--1550-9602.svg?react';

export interface StatusdefaultstatedefaultProps {
  className?: string;
}

/**
 * Statusdefaultstatedefault
 *
 * Original name: Status=Default, State=Default
 * SVG file: Statusdefaultstatedefault--1550-9602.svg
 */
export const Statusdefaultstatedefault: React.FC<
  StatusdefaultstatedefaultProps
> = ({ className }) => {
  return <IconSvg className={`statusdefaultstatedefault ${className || ''}`} />;
};
