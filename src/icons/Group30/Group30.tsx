import React from 'react';
import './Group30.css';
import IconSvg from '../assets/icons/Group30--3172-1310.svg?react';

export interface Group30Props {
  className?: string;
}

/**
 * Group30
 *
 * Original name: Group 30
 * SVG file: Group30--3172-1310.svg
 */
export const Group30: React.FC<Group30Props> = ({ className }) => {
  return <IconSvg className={`group30 ${className || ''}`} />;
};
