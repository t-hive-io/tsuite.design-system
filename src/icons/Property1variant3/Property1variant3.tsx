import React from 'react';
import './Property1variant3.css';
import IconSvg from '../assets/icons/Property1variant3--4822-37886.svg?react';

export interface Property1variant3Props {
  className?: string;
}

/**
 * Property1variant3
 *
 * Original name: Property 1=Variant3
 * SVG file: Property1variant3--4822-37886.svg
 */
export const Property1variant3: React.FC<Property1variant3Props> = ({
  className,
}) => {
  return <IconSvg className={`property1variant3 ${className || ''}`} />;
};
