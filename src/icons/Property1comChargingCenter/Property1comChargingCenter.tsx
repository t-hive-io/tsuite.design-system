import React from 'react';
import './Property1comChargingCenter.css';
import IconSvg from '../assets/icons/Property1comChargingCenter--2945-908.svg?react';

export interface Property1comChargingCenterProps {
  className?: string;
}

/**
 * Property1comChargingCenter
 *
 * Original name: Property 1=Com_Charging_center
 * SVG file: Property1comChargingCenter--2945-908.svg
 */
export const Property1comChargingCenter: React.FC<
  Property1comChargingCenterProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1comchargingcenter ${className || ''}`} />
  );
};
