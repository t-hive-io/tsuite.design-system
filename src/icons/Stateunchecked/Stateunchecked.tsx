import React from 'react';
import './Stateunchecked.css';
import IconSvg from '../assets/icons/Stateunchecked--1754-8347.svg?react';

export interface StateuncheckedProps {
  className?: string;
}

/**
 * Stateunchecked
 *
 * Original name: State=Unchecked
 * SVG file: Stateunchecked--1754-8347.svg
 */
export const Stateunchecked: React.FC<StateuncheckedProps> = ({
  className,
}) => {
  return <IconSvg className={`stateunchecked ${className || ''}`} />;
};
