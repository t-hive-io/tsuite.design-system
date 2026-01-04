import React from 'react';
import './Property1comChargingTop.css';
import IconSvg from '../assets/icons/Property1comChargingTop--2945-1008.svg?react';

export interface Property1comChargingTopProps {
  className?: string;
}

/**
 * Property1comChargingTop
 *
 * Original name: Property 1=Com_Charging_top
 * SVG file: Property1comChargingTop--2945-1008.svg
 */
export const Property1comChargingTop: React.FC<
  Property1comChargingTopProps
> = ({ className }) => {
  return <IconSvg className={`property1comchargingtop ${className || ''}`} />;
};
