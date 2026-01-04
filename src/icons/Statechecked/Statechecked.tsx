import React from 'react';
import './Statechecked.css';
import IconSvg from '../assets/icons/Statechecked--1754-8348.svg?react';

export interface StatecheckedProps {
  className?: string;
}

/**
 * Statechecked
 *
 * Original name: State=Checked
 * SVG file: Statechecked--1754-8348.svg
 */
export const Statechecked: React.FC<StatecheckedProps> = ({ className }) => {
  return <IconSvg className={`statechecked ${className || ''}`} />;
};
