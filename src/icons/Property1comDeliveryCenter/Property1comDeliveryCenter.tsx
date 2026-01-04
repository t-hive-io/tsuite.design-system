import React from 'react';
import './Property1comDeliveryCenter.css';
import IconSvg from '../assets/icons/Property1comDeliveryCenter--2924-963.svg?react';

export interface Property1comDeliveryCenterProps {
  className?: string;
}

/**
 * Property1comDeliveryCenter
 *
 * Original name: Property 1=Com_Delivery_center
 * SVG file: Property1comDeliveryCenter--2924-963.svg
 */
export const Property1comDeliveryCenter: React.FC<
  Property1comDeliveryCenterProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1comdeliverycenter ${className || ''}`} />
  );
};
