import React from 'react';
import './Property1comChargingBottom.css';
import IconSvg from '../assets/icons/Property1comChargingBottom--2945-958.svg?react';

export interface Property1comChargingBottomProps {
  className?: string;
}

/**
 * Property1comChargingBottom
 *
 * Original name: Property 1=Com_Charging_bottom
 * SVG file: Property1comChargingBottom--2945-958.svg
 */
export const Property1comChargingBottom: React.FC<
  Property1comChargingBottomProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1comchargingbottom ${className || ''}`} />
  );
};
