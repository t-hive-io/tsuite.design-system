import React from 'react';
import './Statedefaulttypedelivery.css';
import IconSvg from '../assets/icons/Statedefaulttypedelivery--2133-9740.svg?react';

export interface StatedefaulttypedeliveryProps {
  className?: string;
}

/**
 * Statedefaulttypedelivery
 *
 * Original name: State=Default, Type=Delivery
 * SVG file: Statedefaulttypedelivery--2133-9740.svg
 */
export const Statedefaulttypedelivery: React.FC<
  StatedefaulttypedeliveryProps
> = ({ className }) => {
  return <IconSvg className={`statedefaulttypedelivery ${className || ''}`} />;
};
