import React from 'react';
import './Property1channeldepth.css';
import IconSvg from '../assets/icons/Property1channeldepth--3778-51869.svg?react';

export interface Property1channeldepthProps {
  className?: string;
}

/**
 * Property1channeldepth
 *
 * Original name: Property 1=Channel depth
 * SVG file: Property1channeldepth--3778-51869.svg
 */
export const Property1channeldepth: React.FC<Property1channeldepthProps> = ({
  className,
}) => {
  return <IconSvg className={`property1channeldepth ${className || ''}`} />;
};
