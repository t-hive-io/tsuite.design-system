import React from 'react';
import './Property1variant2.css';
import IconSvg from '../assets/icons/Property1variant2--3144-487.svg?react';

export interface Property1variant2Props {
  className?: string;
}

/**
 * Property1variant2
 *
 * Original name: Property 1=Variant2
 * SVG file: Property1variant2--3144-487.svg
 */
export const Property1variant2: React.FC<Property1variant2Props> = ({
  className,
}) => {
  return <IconSvg className={`property1variant2 ${className || ''}`} />;
};
