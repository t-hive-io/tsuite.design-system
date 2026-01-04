import React from 'react';
import './Statepending.css';
import IconSvg from '../assets/icons/Statepending--1289-8305.svg?react';

export interface StatependingProps {
  className?: string;
}

/**
 * Statepending
 *
 * Original name: State=Pending
 * SVG file: Statepending--1289-8305.svg
 */
export const Statepending: React.FC<StatependingProps> = ({ className }) => {
  return <IconSvg className={`statepending ${className || ''}`} />;
};
