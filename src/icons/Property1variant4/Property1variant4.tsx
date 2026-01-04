import React from 'react';
import './Property1variant4.css';
import IconSvg from '../assets/icons/Property1variant4--4822-37896.svg?react';

export interface Property1variant4Props {
  className?: string;
}

/**
 * Property1variant4
 *
 * Original name: Property 1=Variant4
 * SVG file: Property1variant4--4822-37896.svg
 */
export const Property1variant4: React.FC<Property1variant4Props> = ({
  className,
}) => {
  return <IconSvg className={`property1variant4 ${className || ''}`} />;
};
