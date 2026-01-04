import React from 'react';
import './Stateenabeled.css';
import IconSvg from '../assets/icons/Stateenabeled--4875-38184.svg?react';

export interface StateenabeledProps {
  className?: string;
}

/**
 * Stateenabeled
 *
 * Original name: State=Enabeled
 * SVG file: Stateenabeled--4875-38184.svg
 */
export const Stateenabeled: React.FC<StateenabeledProps> = ({ className }) => {
  return <IconSvg className={`stateenabeled ${className || ''}`} />;
};
