import React from 'react';
import './Property1time.css';
import IconSvg from '../assets/icons/Property1time--3832-40150.svg?react';

export interface Property1timeProps {
  className?: string;
}

/**
 * Property1time
 *
 * Original name: Property 1=Time
 * SVG file: Property1time--3832-40150.svg
 */
export const Property1time: React.FC<Property1timeProps> = ({ className }) => {
  return <IconSvg className={`property1time ${className || ''}`} />;
};
