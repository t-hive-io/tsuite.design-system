import React from 'react';
import './Property1defaul.css';
import IconSvg from '../assets/icons/Property1defaul--3144-485.svg?react';

export interface Property1defaulProps {
  className?: string;
}

/**
 * Property1defaul
 *
 * Original name: Property 1=Defaul
 * SVG file: Property1defaul--3144-485.svg
 */
export const Property1defaul: React.FC<Property1defaulProps> = ({
  className,
}) => {
  return <IconSvg className={`property1defaul ${className || ''}`} />;
};
