import React from 'react';
import './Group17.css';
import IconSvg from '../assets/icons/Group17--3172-1420.svg?react';

export interface Group17Props {
  className?: string;
}

/**
 * Group17
 *
 * Original name: Group 17
 * SVG file: Group17--3172-1420.svg
 */
export const Group17: React.FC<Group17Props> = ({ className }) => {
  return <IconSvg className={`group17 ${className || ''}`} />;
};
