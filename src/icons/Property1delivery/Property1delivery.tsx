import React from 'react';
import './Property1delivery.css';
import IconSvg from '../assets/icons/Property1delivery--3003-11133.svg?react';

export interface Property1deliveryProps {
  className?: string;
}

/**
 * Property1delivery
 *
 * Original name: Property 1=Delivery
 * SVG file: Property1delivery--3003-11133.svg
 */
export const Property1delivery: React.FC<Property1deliveryProps> = ({
  className,
}) => {
  return <IconSvg className={`property1delivery ${className || ''}`} />;
};
