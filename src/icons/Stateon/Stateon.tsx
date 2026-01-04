import React from 'react';
import './Stateon.css';
import IconSvg from '../assets/icons/Stateon--1894-8777.svg?react';

export interface StateonProps {
  className?: string;
}

/**
 * Stateon
 *
 * Original name: State=on
 * SVG file: Stateon--1894-8777.svg
 */
export const Stateon: React.FC<StateonProps> = ({ className }) => {
  return <IconSvg className={`stateon ${className || ''}`} />;
};
