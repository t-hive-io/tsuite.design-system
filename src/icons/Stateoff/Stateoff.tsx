import React from 'react';
import './Stateoff.css';
import IconSvg from '../assets/icons/Stateoff--1894-8775.svg?react';

export interface StateoffProps {
  className?: string;
}

/**
 * Stateoff
 *
 * Original name: State=off
 * SVG file: Stateoff--1894-8775.svg
 */
export const Stateoff: React.FC<StateoffProps> = ({ className }) => {
  return <IconSvg className={`stateoff ${className || ''}`} />;
};
