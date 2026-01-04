import React from 'react';
import './Statedraft.css';
import IconSvg from '../assets/icons/Statedraft--1550-9717.svg?react';

export interface StatedraftProps {
  className?: string;
}

/**
 * Statedraft
 *
 * Original name: State=Draft
 * SVG file: Statedraft--1550-9717.svg
 */
export const Statedraft: React.FC<StatedraftProps> = ({ className }) => {
  return <IconSvg className={`statedraft ${className || ''}`} />;
};
