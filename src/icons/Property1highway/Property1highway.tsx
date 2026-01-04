import React from 'react';
import './Property1highway.css';
import IconSvg from '../assets/icons/Property1highway--2996-3908.svg?react';

export interface Property1highwayProps {
  className?: string;
}

/**
 * Property1highway
 *
 * Original name: Property 1=Highway
 * SVG file: Property1highway--2996-3908.svg
 */
export const Property1highway: React.FC<Property1highwayProps> = ({
  className,
}) => {
  return <IconSvg className={`property1highway ${className || ''}`} />;
};
