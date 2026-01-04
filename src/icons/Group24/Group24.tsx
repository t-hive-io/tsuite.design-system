import React from 'react';
import './Group24.css';
import IconSvg from '../assets/icons/Group24--3172-1390.svg?react';

export interface Group24Props {
  className?: string;
}

/**
 * Group24
 *
 * Original name: Group 24
 * SVG file: Group24--3172-1390.svg
 */
export const Group24: React.FC<Group24Props> = ({ className }) => {
  return <IconSvg className={`group24 ${className || ''}`} />;
};
