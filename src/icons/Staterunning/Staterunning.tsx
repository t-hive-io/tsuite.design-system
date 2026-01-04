import React from 'react';
import './Staterunning.css';
import IconSvg from '../assets/icons/Staterunning--1289-8311.svg?react';

export interface StaterunningProps {
  className?: string;
}

/**
 * Staterunning
 *
 * Original name: State=Running
 * SVG file: Staterunning--1289-8311.svg
 */
export const Staterunning: React.FC<StaterunningProps> = ({ className }) => {
  return <IconSvg className={`staterunning ${className || ''}`} />;
};
