import React from 'react';
import './Statenotallchecked.css';
import IconSvg from '../assets/icons/Statenotallchecked--1754-8346.svg?react';

export interface StatenotallcheckedProps {
  className?: string;
}

/**
 * Statenotallchecked
 *
 * Original name: State=Not all checked
 * SVG file: Statenotallchecked--1754-8346.svg
 */
export const Statenotallchecked: React.FC<StatenotallcheckedProps> = ({
  className,
}) => {
  return <IconSvg className={`statenotallchecked ${className || ''}`} />;
};
