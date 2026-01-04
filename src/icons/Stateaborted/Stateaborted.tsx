import React from 'react';
import './Stateaborted.css';
import IconSvg from '../assets/icons/Stateaborted--1319-8147.svg?react';

export interface StateabortedProps {
  className?: string;
}

/**
 * Stateaborted
 *
 * Original name: State=Aborted
 * SVG file: Stateaborted--1319-8147.svg
 */
export const Stateaborted: React.FC<StateabortedProps> = ({ className }) => {
  return <IconSvg className={`stateaborted ${className || ''}`} />;
};
