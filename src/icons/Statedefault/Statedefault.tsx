import React from 'react';
import './Statedefault.css';
import IconSvg from '../assets/icons/Statedefault--1081-6458.svg?react';

export interface StatedefaultProps {
  className?: string;
}

/**
 * Statedefault
 *
 * Original name: State=Default
 * SVG file: Statedefault--1081-6458.svg
 */
export const Statedefault: React.FC<StatedefaultProps> = ({ className }) => {
  return <IconSvg className={`statedefault ${className || ''}`} />;
};
