import React from 'react';
import './Forklift.css';
import IconSvg from '../assets/icons/Forklift--1074-6388.svg?react';

export interface ForkliftProps {
  className?: string;
}

/**
 * Forklift
 *
 * Original name: forklift
 * SVG file: Forklift--1074-6388.svg
 */
export const Forklift: React.FC<ForkliftProps> = ({ className }) => {
  return <IconSvg className={`forklift ${className || ''}`} />;
};
