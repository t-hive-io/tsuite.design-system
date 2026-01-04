import React from 'react';
import './Statedefaulttypecharging.css';
import IconSvg from '../assets/icons/Statedefaulttypecharging--2136-8497.svg?react';

export interface StatedefaulttypechargingProps {
  className?: string;
}

/**
 * Statedefaulttypecharging
 *
 * Original name: State=Default, Type=Charging
 * SVG file: Statedefaulttypecharging--2136-8497.svg
 */
export const Statedefaulttypecharging: React.FC<
  StatedefaulttypechargingProps
> = ({ className }) => {
  return <IconSvg className={`statedefaulttypecharging ${className || ''}`} />;
};
