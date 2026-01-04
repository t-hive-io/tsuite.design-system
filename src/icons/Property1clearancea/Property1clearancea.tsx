import React from 'react';
import './Property1clearancea.css';
import IconSvg from '../assets/icons/Property1clearancea--4492-37765.svg?react';

export interface Property1clearanceaProps {
  className?: string;
}

/**
 * Property1clearancea
 *
 * Original name: Property 1=Clearance A
 * SVG file: Property1clearancea--4492-37765.svg
 */
export const Property1clearancea: React.FC<Property1clearanceaProps> = ({
  className,
}) => {
  return <IconSvg className={`property1clearancea ${className || ''}`} />;
};
