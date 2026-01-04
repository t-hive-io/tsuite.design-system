import React from 'react';
import './Stateresizetypeparking.css';
import IconSvg from '../assets/icons/Stateresizetypeparking--2136-8679.svg?react';

export interface StateresizetypeparkingProps {
  className?: string;
}

/**
 * Stateresizetypeparking
 *
 * Original name: State=Resize, Type=Parking
 * SVG file: Stateresizetypeparking--2136-8679.svg
 */
export const Stateresizetypeparking: React.FC<StateresizetypeparkingProps> = ({
  className,
}) => {
  return <IconSvg className={`stateresizetypeparking ${className || ''}`} />;
};
