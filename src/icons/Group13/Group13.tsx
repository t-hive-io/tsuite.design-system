import React from 'react';
import './Group13.css';
import IconSvg from '../assets/icons/Group13--3172-1456.svg?react';

export interface Group13Props {
  className?: string;
}

/**
 * Group13
 *
 * Original name: Group 13
 * SVG file: Group13--3172-1456.svg
 */
export const Group13: React.FC<Group13Props> = ({ className }) => {
  return <IconSvg className={`group13 ${className || ''}`} />;
};
