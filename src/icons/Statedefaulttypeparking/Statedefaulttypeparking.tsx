import React from 'react';
import './Statedefaulttypeparking.css';
import IconSvg from '../assets/icons/Statedefaulttypeparking--2136-8676.svg?react';

export interface StatedefaulttypeparkingProps {
  className?: string;
}

/**
 * Statedefaulttypeparking
 *
 * Original name: State=Default, Type=Parking
 * SVG file: Statedefaulttypeparking--2136-8676.svg
 */
export const Statedefaulttypeparking: React.FC<
  StatedefaulttypeparkingProps
> = ({ className }) => {
  return <IconSvg className={`statedefaulttypeparking ${className || ''}`} />;
};
