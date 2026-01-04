import React from 'react';
import './Group32.css';
import IconSvg from '../assets/icons/Group32--3172-1328.svg?react';

export interface Group32Props {
  className?: string;
}

/**
 * Group32
 *
 * Original name: Group 32
 * SVG file: Group32--3172-1328.svg
 */
export const Group32: React.FC<Group32Props> = ({ className }) => {
  return <IconSvg className={`group32 ${className || ''}`} />;
};
