import React from 'react';
import './Group22.css';
import IconSvg from '../assets/icons/Group22--3172-1380.svg?react';

export interface Group22Props {
  className?: string;
}

/**
 * Group22
 *
 * Original name: Group 22
 * SVG file: Group22--3172-1380.svg
 */
export const Group22: React.FC<Group22Props> = ({ className }) => {
  return <IconSvg className={`group22 ${className || ''}`} />;
};
