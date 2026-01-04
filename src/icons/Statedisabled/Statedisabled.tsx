import React from 'react';
import './Statedisabled.css';
import IconSvg from '../assets/icons/Statedisabled--1535-9375.svg?react';

export interface StatedisabledProps {
  className?: string;
}

/**
 * Statedisabled
 *
 * Original name: State=disabled
 * SVG file: Statedisabled--1535-9375.svg
 */
export const Statedisabled: React.FC<StatedisabledProps> = ({ className }) => {
  return <IconSvg className={`statedisabled ${className || ''}`} />;
};
