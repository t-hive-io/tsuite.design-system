import React from 'react';
import './Statehover.css';
import IconSvg from '../assets/icons/Statehover--1081-6463.svg?react';

export interface StatehoverProps {
  className?: string;
}

/**
 * Statehover
 *
 * Original name: State=Hover
 * SVG file: Statehover--1081-6463.svg
 */
export const Statehover: React.FC<StatehoverProps> = ({ className }) => {
  return <IconSvg className={`statehover ${className || ''}`} />;
};
