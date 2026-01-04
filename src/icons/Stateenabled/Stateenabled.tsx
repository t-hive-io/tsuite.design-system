import React from 'react';
import './Stateenabled.css';
import IconSvg from '../assets/icons/Stateenabled--1065-6390.svg?react';

export interface StateenabledProps {
  className?: string;
}

/**
 * Stateenabled
 *
 * Original name: State=Enabled
 * SVG file: Stateenabled--1065-6390.svg
 */
export const Stateenabled: React.FC<StateenabledProps> = ({ className }) => {
  return <IconSvg className={`stateenabled ${className || ''}`} />;
};
