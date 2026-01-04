import React from 'react';
import './Property1refimg.css';
import IconSvg from '../assets/icons/Property1refimg--3179-644.svg?react';

export interface Property1refimgProps {
  className?: string;
}

/**
 * Property1refimg
 *
 * Original name: Property 1=Ref img
 * SVG file: Property1refimg--3179-644.svg
 */
export const Property1refimg: React.FC<Property1refimgProps> = ({
  className,
}) => {
  return <IconSvg className={`property1refimg ${className || ''}`} />;
};
