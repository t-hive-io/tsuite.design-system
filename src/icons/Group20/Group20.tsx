import React from 'react';
import './Group20.css';
import IconSvg from '../assets/icons/Group20--3172-1372.svg?react';

export interface Group20Props {
  className?: string;
}

/**
 * Group20
 *
 * Original name: Group 20
 * SVG file: Group20--3172-1372.svg
 */
export const Group20: React.FC<Group20Props> = ({ className }) => {
  return <IconSvg className={`group20 ${className || ''}`} />;
};
