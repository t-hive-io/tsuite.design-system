import React from 'react';
import './Group31.css';
import IconSvg from '../assets/icons/Group31--3172-1318.svg?react';

export interface Group31Props {
  className?: string;
}

/**
 * Group31
 *
 * Original name: Group 31
 * SVG file: Group31--3172-1318.svg
 */
export const Group31: React.FC<Group31Props> = ({ className }) => {
  return <IconSvg className={`group31 ${className || ''}`} />;
};
