import React from 'react';
import './Property1flows.css';
import IconSvg from '../assets/icons/Property1flows--3799-60899.svg?react';

export interface Property1flowsProps {
  className?: string;
}

/**
 * Property1flows
 *
 * Original name: Property 1=Flows
 * SVG file: Property1flows--3799-60899.svg
 */
export const Property1flows: React.FC<Property1flowsProps> = ({
  className,
}) => {
  return <IconSvg className={`property1flows ${className || ''}`} />;
};
