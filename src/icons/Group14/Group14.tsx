import React from 'react';
import './Group14.css';
import IconSvg from '../assets/icons/Group14--3172-1444.svg?react';

export interface Group14Props {
  className?: string;
}

/**
 * Group14
 *
 * Original name: Group 14
 * SVG file: Group14--3172-1444.svg
 */
export const Group14: React.FC<Group14Props> = ({ className }) => {
  return <IconSvg className={`group14 ${className || ''}`} />;
};
