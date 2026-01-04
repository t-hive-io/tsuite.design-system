import React from 'react';
import './Property1titleicon.css';
import IconSvg from '../assets/icons/Property1titleicon--3811-43353.svg?react';

export interface Property1titleiconProps {
  className?: string;
}

/**
 * Property1titleicon
 *
 * Original name: Property 1=Title Icon
 * SVG file: Property1titleicon--3811-43353.svg
 */
export const Property1titleicon: React.FC<Property1titleiconProps> = ({
  className,
}) => {
  return <IconSvg className={`property1titleicon ${className || ''}`} />;
};
