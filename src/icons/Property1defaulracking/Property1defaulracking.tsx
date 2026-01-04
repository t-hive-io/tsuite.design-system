import React from 'react';
import './Property1defaulracking.css';
import IconSvg from '../assets/icons/Property1defaulracking--4573-37785.svg?react';

export interface Property1defaulrackingProps {
  className?: string;
}

/**
 * Property1defaulracking
 *
 * Original name: Property 1=Defaul racking
 * SVG file: Property1defaulracking--4573-37785.svg
 */
export const Property1defaulracking: React.FC<Property1defaulrackingProps> = ({
  className,
}) => {
  return <IconSvg className={`property1defaulracking ${className || ''}`} />;
};
