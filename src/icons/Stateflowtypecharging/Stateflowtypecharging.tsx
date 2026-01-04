import React from 'react';
import './Stateflowtypecharging.css';
import IconSvg from '../assets/icons/Stateflowtypecharging--2136-8509.svg?react';

export interface StateflowtypechargingProps {
  className?: string;
}

/**
 * Stateflowtypecharging
 *
 * Original name: State=Flow, Type=Charging
 * SVG file: Stateflowtypecharging--2136-8509.svg
 */
export const Stateflowtypecharging: React.FC<StateflowtypechargingProps> = ({
  className,
}) => {
  return <IconSvg className={`stateflowtypecharging ${className || ''}`} />;
};
