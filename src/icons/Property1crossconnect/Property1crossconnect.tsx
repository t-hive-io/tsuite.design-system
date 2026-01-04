import React from 'react';
import './Property1crossconnect.css';
import IconSvg from '../assets/icons/Property1crossconnect--3088-8677.svg?react';

export interface Property1crossconnectProps {
  className?: string;
}

/**
 * Property1crossconnect
 *
 * Original name: Property 1=Cross connect
 * SVG file: Property1crossconnect--3088-8677.svg
 */
export const Property1crossconnect: React.FC<Property1crossconnectProps> = ({
  className,
}) => {
  return <IconSvg className={`property1crossconnect ${className || ''}`} />;
};
