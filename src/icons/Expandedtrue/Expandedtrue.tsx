import React from 'react';
import './Expandedtrue.css';
import IconSvg from '../assets/icons/Expandedtrue--1084-6852.svg?react';

export interface ExpandedtrueProps {
  className?: string;
}

/**
 * Expandedtrue
 *
 * Original name: Expanded=True
 * SVG file: Expandedtrue--1084-6852.svg
 */
export const Expandedtrue: React.FC<ExpandedtrueProps> = ({ className }) => {
  return <IconSvg className={`expandedtrue ${className || ''}`} />;
};
