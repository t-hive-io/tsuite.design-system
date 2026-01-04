import React from 'react';
import './Property1titleitalic.css';
import IconSvg from '../assets/icons/Property1titleitalic--3811-43351.svg?react';

export interface Property1titleitalicProps {
  className?: string;
}

/**
 * Property1titleitalic
 *
 * Original name: Property 1=Title italic
 * SVG file: Property1titleitalic--3811-43351.svg
 */
export const Property1titleitalic: React.FC<Property1titleitalicProps> = ({
  className,
}) => {
  return <IconSvg className={`property1titleitalic ${className || ''}`} />;
};
