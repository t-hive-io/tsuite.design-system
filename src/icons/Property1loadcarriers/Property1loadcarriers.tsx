import React from 'react';
import './Property1loadcarriers.css';
import IconSvg from '../assets/icons/Property1loadcarriers--3180-1692.svg?react';

export interface Property1loadcarriersProps {
  className?: string;
}

/**
 * Property1loadcarriers
 *
 * Original name: Property 1=Load carriers
 * SVG file: Property1loadcarriers--3180-1692.svg
 */
export const Property1loadcarriers: React.FC<Property1loadcarriersProps> = ({
  className,
}) => {
  return <IconSvg className={`property1loadcarriers ${className || ''}`} />;
};
