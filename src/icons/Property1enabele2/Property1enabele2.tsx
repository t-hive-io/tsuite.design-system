import React from 'react';
import './Property1enabele2.css';
import IconSvg from '../assets/icons/Property1enabele2--3832-44800.svg?react';

export interface Property1enabele2Props {
  className?: string;
}

/**
 * Property1enabele2
 *
 * Original name: Property 1=Enabele 2
 * SVG file: Property1enabele2--3832-44800.svg
 */
export const Property1enabele2: React.FC<Property1enabele2Props> = ({
  className,
}) => {
  return <IconSvg className={`property1enabele2 ${className || ''}`} />;
};
