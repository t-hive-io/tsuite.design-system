import React from 'react';
import './Property1scaletool.css';
import IconSvg from '../assets/icons/Property1scaletool--3179-1020.svg?react';

export interface Property1scaletoolProps {
  className?: string;
}

/**
 * Property1scaletool
 *
 * Original name: Property 1=Scale tool
 * SVG file: Property1scaletool--3179-1020.svg
 */
export const Property1scaletool: React.FC<Property1scaletoolProps> = ({
  className,
}) => {
  return <IconSvg className={`property1scaletool ${className || ''}`} />;
};
