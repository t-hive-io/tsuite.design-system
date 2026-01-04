import React from 'react';
import './Stateactive.css';
import IconSvg from '../assets/icons/Stateactive--1081-6468.svg?react';

export interface StateactiveProps {
  className?: string;
}

/**
 * Stateactive
 *
 * Original name: State=Active
 * SVG file: Stateactive--1081-6468.svg
 */
export const Stateactive: React.FC<StateactiveProps> = ({ className }) => {
  return <IconSvg className={`stateactive ${className || ''}`} />;
};
