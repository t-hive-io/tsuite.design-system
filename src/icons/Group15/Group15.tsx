import React from 'react';
import './Group15.css';
import IconSvg from '../assets/icons/Group15--3172-1432.svg?react';

export interface Group15Props {
  className?: string;
}

/**
 * Group15
 *
 * Original name: Group 15
 * SVG file: Group15--3172-1432.svg
 */
export const Group15: React.FC<Group15Props> = ({ className }) => {
  return <IconSvg className={`group15 ${className || ''}`} />;
};
