import React from 'react';
import './Statecomplete.css';
import IconSvg from '../assets/icons/Statecomplete--1289-8313.svg?react';

export interface StatecompleteProps {
  className?: string;
}

/**
 * Statecomplete
 *
 * Original name: State=Complete
 * SVG file: Statecomplete--1289-8313.svg
 */
export const Statecomplete: React.FC<StatecompleteProps> = ({ className }) => {
  return <IconSvg className={`statecomplete ${className || ''}`} />;
};
