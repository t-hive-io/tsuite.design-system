import React from 'react';
import './Group23.css';
import IconSvg from '../assets/icons/Group23--3172-1385.svg?react';

export interface Group23Props {
  className?: string;
}

/**
 * Group23
 *
 * Original name: Group 23
 * SVG file: Group23--3172-1385.svg
 */
export const Group23: React.FC<Group23Props> = ({ className }) => {
  return <IconSvg className={`group23 ${className || ''}`} />;
};
