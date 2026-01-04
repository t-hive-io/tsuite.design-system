import React from 'react';
import './Group25.css';
import IconSvg from '../assets/icons/Group25--3172-1399.svg?react';

export interface Group25Props {
  className?: string;
}

/**
 * Group25
 *
 * Original name: Group 25
 * SVG file: Group25--3172-1399.svg
 */
export const Group25: React.FC<Group25Props> = ({ className }) => {
  return <IconSvg className={`group25 ${className || ''}`} />;
};
