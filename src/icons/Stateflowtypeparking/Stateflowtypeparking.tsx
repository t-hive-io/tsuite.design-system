import React from 'react';
import './Stateflowtypeparking.css';
import IconSvg from '../assets/icons/Stateflowtypeparking--2136-8688.svg?react';

export interface StateflowtypeparkingProps {
  className?: string;
}

/**
 * Stateflowtypeparking
 *
 * Original name: State=Flow, Type=Parking
 * SVG file: Stateflowtypeparking--2136-8688.svg
 */
export const Stateflowtypeparking: React.FC<StateflowtypeparkingProps> = ({
  className,
}) => {
  return <IconSvg className={`stateflowtypeparking ${className || ''}`} />;
};
