import React from 'react';
import './Statusactivestatedraft.css';
import IconSvg from '../assets/icons/Statusactivestatedraft--1289-8366.svg?react';

export interface StatusactivestatedraftProps {
  className?: string;
}

/**
 * Statusactivestatedraft
 *
 * Original name: Status=Active, State=Draft
 * SVG file: Statusactivestatedraft--1289-8366.svg
 */
export const Statusactivestatedraft: React.FC<StatusactivestatedraftProps> = ({
  className,
}) => {
  return <IconSvg className={`statusactivestatedraft ${className || ''}`} />;
};
