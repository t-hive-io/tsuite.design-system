import React from 'react';
import './Property1comDeliveryBottom.css';
import IconSvg from '../assets/icons/Property1comDeliveryBottom--2924-1063.svg?react';

export interface Property1comDeliveryBottomProps {
  className?: string;
}

/**
 * Property1comDeliveryBottom
 *
 * Original name: Property 1=Com_Delivery_bottom
 * SVG file: Property1comDeliveryBottom--2924-1063.svg
 */
export const Property1comDeliveryBottom: React.FC<
  Property1comDeliveryBottomProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1comdeliverybottom ${className || ''}`} />
  );
};
