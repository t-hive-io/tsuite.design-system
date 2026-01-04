import React from 'react';
import './Property1comDeliveryTop.css';
import IconSvg from '../assets/icons/Property1comDeliveryTop--2924-1013.svg?react';

export interface Property1comDeliveryTopProps {
  className?: string;
}

/**
 * Property1comDeliveryTop
 *
 * Original name: Property 1=Com_Delivery_top
 * SVG file: Property1comDeliveryTop--2924-1013.svg
 */
export const Property1comDeliveryTop: React.FC<
  Property1comDeliveryTopProps
> = ({ className }) => {
  return <IconSvg className={`property1comdeliverytop ${className || ''}`} />;
};
