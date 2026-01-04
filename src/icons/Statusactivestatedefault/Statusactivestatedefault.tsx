import React from 'react';
import './Statusactivestatedefault.css';
import IconSvg from '../assets/icons/Statusactivestatedefault--1289-8358.svg?react';

export interface StatusactivestatedefaultProps {
  className?: string;
}

/**
 * Statusactivestatedefault
 *
 * Original name: Status=Active, State=Default
 * SVG file: Statusactivestatedefault--1289-8358.svg
 */
export const Statusactivestatedefault: React.FC<
  StatusactivestatedefaultProps
> = ({ className }) => {
  return <IconSvg className={`statusactivestatedefault ${className || ''}`} />;
};
