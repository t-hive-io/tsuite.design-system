import React from 'react';
import './Property1lane.css';
import IconSvg from '../assets/icons/Property1lane--3769-48377.svg?react';

export interface Property1laneProps {
  className?: string;
}

/**
 * Property1lane
 *
 * Original name: Property 1=Lane
 * SVG file: Property1lane--3769-48377.svg
 */
export const Property1lane: React.FC<Property1laneProps> = ({ className }) => {
  return <IconSvg className={`property1lane ${className || ''}`} />;
};
