import React from 'react';
import './Statusactivestatehover.css';
import IconSvg from '../assets/icons/Statusactivestatehover--1296-8130.svg?react';

export interface StatusactivestatehoverProps {
  className?: string;
}

/**
 * Statusactivestatehover
 *
 * Original name: Status=Active, State=Hover
 * SVG file: Statusactivestatehover--1296-8130.svg
 */
export const Statusactivestatehover: React.FC<StatusactivestatehoverProps> = ({
  className,
}) => {
  return <IconSvg className={`statusactivestatehover ${className || ''}`} />;
};
