import React from 'react';
import './Expandedfalsevisibletrue.css';
import IconSvg from '../assets/icons/Expandedfalsevisibletrue--1522-9583.svg?react';

export interface ExpandedfalsevisibletrueProps {
  className?: string;
}

/**
 * Expandedfalsevisibletrue
 *
 * Original name: Expanded=False, Visible=True
 * SVG file: Expandedfalsevisibletrue--1522-9583.svg
 */
export const Expandedfalsevisibletrue: React.FC<
  ExpandedfalsevisibletrueProps
> = ({ className }) => {
  return <IconSvg className={`expandedfalsevisibletrue ${className || ''}`} />;
};
