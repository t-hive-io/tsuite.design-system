import React from 'react';
import './Property1clearanceb.css';
import IconSvg from '../assets/icons/Property1clearanceb--4492-37749.svg?react';

export interface Property1clearancebProps {
  className?: string;
}

/**
 * Property1clearanceb
 *
 * Original name: Property 1=Clearance B
 * SVG file: Property1clearanceb--4492-37749.svg
 */
export const Property1clearanceb: React.FC<Property1clearancebProps> = ({
  className,
}) => {
  return <IconSvg className={`property1clearanceb ${className || ''}`} />;
};
