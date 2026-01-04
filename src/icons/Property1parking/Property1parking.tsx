import React from 'react';
import './Property1parking.css';
import IconSvg from '../assets/icons/Property1parking--3003-8262.svg?react';

export interface Property1parkingProps {
  className?: string;
}

/**
 * Property1parking
 *
 * Original name: Property 1=Parking
 * SVG file: Property1parking--3003-8262.svg
 */
export const Property1parking: React.FC<Property1parkingProps> = ({
  className,
}) => {
  return <IconSvg className={`property1parking ${className || ''}`} />;
};
