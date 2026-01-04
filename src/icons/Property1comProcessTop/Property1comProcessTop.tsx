import React from 'react';
import './Property1comProcessTop.css';
import IconSvg from '../assets/icons/Property1comProcessTop--2925-1299.svg?react';

export interface Property1comProcessTopProps {
  className?: string;
}

/**
 * Property1comProcessTop
 *
 * Original name: Property 1=Com_Process_top
 * SVG file: Property1comProcessTop--2925-1299.svg
 */
export const Property1comProcessTop: React.FC<Property1comProcessTopProps> = ({
  className,
}) => {
  return <IconSvg className={`property1comprocesstop ${className || ''}`} />;
};
