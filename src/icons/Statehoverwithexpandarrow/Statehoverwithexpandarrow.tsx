import React from 'react';
import './Statehoverwithexpandarrow.css';
import IconSvg from '../assets/icons/Statehoverwithexpandarrow--3924-109166.svg?react';

export interface StatehoverwithexpandarrowProps {
  className?: string;
}

/**
 * Statehoverwithexpandarrow
 *
 * Original name: State=Hover with expand arrow
 * SVG file: Statehoverwithexpandarrow--3924-109166.svg
 */
export const Statehoverwithexpandarrow: React.FC<
  StatehoverwithexpandarrowProps
> = ({ className }) => {
  return <IconSvg className={`statehoverwithexpandarrow ${className || ''}`} />;
};
