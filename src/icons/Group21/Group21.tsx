import React from 'react';
import './Group21.css';
import IconSvg from '../assets/icons/Group21--3172-1375.svg?react';

export interface Group21Props {
  className?: string;
}

/**
 * Group21
 *
 * Original name: Group 21
 * SVG file: Group21--3172-1375.svg
 */
export const Group21: React.FC<Group21Props> = ({ className }) => {
  return <IconSvg className={`group21 ${className || ''}`} />;
};
