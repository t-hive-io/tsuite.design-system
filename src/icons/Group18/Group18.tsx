import React from 'react';
import './Group18.css';
import IconSvg from '../assets/icons/Group18--3172-1407.svg?react';

export interface Group18Props {
  className?: string;
}

/**
 * Group18
 *
 * Original name: Group 18
 * SVG file: Group18--3172-1407.svg
 */
export const Group18: React.FC<Group18Props> = ({ className }) => {
  return <IconSvg className={`group18 ${className || ''}`} />;
};
