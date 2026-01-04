import React from 'react';
import './Statuscompletestatedefault.css';
import IconSvg from '../assets/icons/Statuscompletestatedefault--2033-7919.svg?react';

export interface StatuscompletestatedefaultProps {
  className?: string;
}

/**
 * Statuscompletestatedefault
 *
 * Original name: Status=Complete, State=Default
 * SVG file: Statuscompletestatedefault--2033-7919.svg
 */
export const Statuscompletestatedefault: React.FC<
  StatuscompletestatedefaultProps
> = ({ className }) => {
  return (
    <IconSvg className={`statuscompletestatedefault ${className || ''}`} />
  );
};
