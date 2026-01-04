import React from 'react';
import './Statusorderprofilestatedefault.css';
import IconSvg from '../assets/icons/Statusorderprofilestatedefault--3096-2480.svg?react';

export interface StatusorderprofilestatedefaultProps {
  className?: string;
}

/**
 * Statusorderprofilestatedefault
 *
 * Original name: Status=Order profile, State=Default
 * SVG file: Statusorderprofilestatedefault--3096-2480.svg
 */
export const Statusorderprofilestatedefault: React.FC<
  StatusorderprofilestatedefaultProps
> = ({ className }) => {
  return (
    <IconSvg className={`statusorderprofilestatedefault ${className || ''}`} />
  );
};
