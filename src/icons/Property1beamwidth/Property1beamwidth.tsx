import React from 'react';
import './Property1beamwidth.css';
import IconSvg from '../assets/icons/Property1beamwidth--4464-37684.svg?react';

export interface Property1beamwidthProps {
  className?: string;
}

/**
 * Property1beamwidth
 *
 * Original name: Property 1=Beam width
 * SVG file: Property1beamwidth--4464-37684.svg
 */
export const Property1beamwidth: React.FC<Property1beamwidthProps> = ({
  className,
}) => {
  return <IconSvg className={`property1beamwidth ${className || ''}`} />;
};
