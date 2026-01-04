import React from 'react';
import './Stateresizetypecharging.css';
import IconSvg from '../assets/icons/Stateresizetypecharging--2136-8500.svg?react';

export interface StateresizetypechargingProps {
  className?: string;
}

/**
 * Stateresizetypecharging
 *
 * Original name: State=Resize, Type=Charging
 * SVG file: Stateresizetypecharging--2136-8500.svg
 */
export const Stateresizetypecharging: React.FC<
  StateresizetypechargingProps
> = ({ className }) => {
  return <IconSvg className={`stateresizetypecharging ${className || ''}`} />;
};
